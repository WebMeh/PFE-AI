import { CgProfile } from "react-icons/cg";

const NavbarProf = ({prof}) => {
    return (
        <>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn  me-md-2 mt-1"> <CgProfile className='fs-1' /> </button>

            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <i style={{ fontSize: '80%', fontWeight: 'bold' }}>
                    Pr. {prof && prof.firstname + " " + prof.lastname}
                </i>
            </div>
        </>
    )
}

export default NavbarProf