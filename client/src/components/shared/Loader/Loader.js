import { Spinner } from 'react-bootstrap'

const Loader = () => {
    return (
        <>
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="success" />
        </>
    )
}

export default Loader