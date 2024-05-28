import { FaUserGraduate } from "react-icons/fa"
import { IoMdMenu } from "react-icons/io"

const NavbarStudent = ({user}) => {
    return (
        <>
            <div className='mx-2'>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex my-4'>
                        <IoMdMenu size={28} className='mx-2' />
                        <h4>Espace étudiant</h4>
                    </div>
                    <div className="text-right mt-3">
                        <FaUserGraduate title={user.firstname+" "+ user.lastname} className="mx-4" size={36} style={{ color: '#0e213d' }} />
                        
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default NavbarStudent