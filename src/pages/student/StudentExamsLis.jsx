import { Col, Row } from "react-bootstrap"
import NavbarStudent from "./NavbarStudent"
import SideBarStudent from "./SideBarStudent"
import EvaluationHistoryTable from "./EvaluationHistoryTable"


const StudentExamsList = () => {
    return (
        <>
            <NavbarStudent />
            <Row>
                <SideBarStudent />
                <Col md={9} >
                    <h4 style={{fontFamily: 'sans-serif', color: '#0e213d'}}>Historique d'évaluations</h4>
                    <hr className="w-50" />
                    <EvaluationHistoryTable />
                </Col>
            </Row>
        </>
    )
}
export default StudentExamsList