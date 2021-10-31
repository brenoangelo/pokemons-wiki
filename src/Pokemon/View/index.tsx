import { useParams } from 'react-router-dom'

interface ParamTypes {
    name: string;
}

export function View() {
    const { name } = useParams<ParamTypes>()

    
    return (
        <div>View do pokemon</div>
    )
}