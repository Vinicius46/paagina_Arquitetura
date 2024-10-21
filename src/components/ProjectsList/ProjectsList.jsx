
import { useContext, useState, useEffect } from 'react'
import './ProjectsList.css'


// COMPONENTS
import Button from '../Button/Button'

// ASSETS
import likedFilled from '../../assets/logosSvg/like-filled.svg'
import LikeOutline from '../../assets/logosSvg/like.svg'

// UTILS
import { getApiData } from '../../services/apiServices'

// CONTEXT
import { AppContext } from '../../contexts/AppContext'

export default function ProjectsList(){
    const appContext = useContext(AppContext)
    const [favProjects, setFavProject] = useState([])
    const [projects, setProjects] = useState()
    const handleSavedFavProject = (id) => {
        setFavProject((prevFavProjects) => {
            if(prevFavProjects.includes(id)){
                const filterArray = prevFavProjects.filter((projectId) => projectId !== id)
                sessionStorage.setItem('favProjects', JSON.stringify(filterArray))
                return prevFavProjects.filter((projectId) => projectId !== id)
            }else {
                sessionStorage.setItem('favProjects', JSON.stringify([...prevFavProjects]))
                return [...prevFavProjects, id]
            }
        })
    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                const projectsResponse = await getApiData('projects')
                setProjects(projectsResponse)
            } catch {
                setProjects([])
            }
        }

        fetchData()
    }, [])

    useEffect (() => {
       const savedFavProjects = JSON.parse(sessionStorage.getItem('favProjects'))
       if (savedFavProjects){
        setFavProject(savedFavProjects)
       }
    }, [])

    return (
        <div className="projects-section">
            <div className="projects-hero">
                <h2>{appContext.languages[appContext.language].projects.title}</h2>
                <p>{appContext.languages[appContext.language].projects.subtitle}</p>
            </div>
            <div className="project-grid">
                {
                    projects ?
                    projects.map((project) => (
                        <div className="project-card d-flex jc-center al-center fd-column"  key={project.id}>
                            <div className="thumb tertiary-background"
                            style={{ backgroundImage: `url(${project.thumb})`}}>
                            </div>
                            <h3>{project.title}</h3>
                            <p>{project.subtitle}</p>
                            <Button buttonStyle="unstyled" onClick={() => handleSavedFavProject(project.id) }>
                                <img src={favProjects.includes(project.id) ? likedFilled: LikeOutline} height="20px"/>
                            </Button>
                            
                        </div>
                        

                    )) 
                    :
                    null
                }
                
            </div>
        </div>
    )
}
