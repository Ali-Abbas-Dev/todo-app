import { useSelector, useDispatch } from "react-redux";
import { delTask, editTask, statusToggler } from "../redux/actions";

const Table = () => {
    let dispatch = useDispatch();
    let array = useSelector((state) => state);

    return <>
        <table className="table table-hover mt-4 table-sm align-middle">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col" className="w-50">Task</th>
                    <th scope="col">Options</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {array ? array.map((item, i) => {
                    return <tr key={item.id} className={item.status ? 'text-decoration-line-through text-secondary' : null}>
                        <th scope="row">{i + 1}</th>
                        <td>{item.task}</td>
                        <td className="d-flex justify-content-between">
                            {item.status ? <><div className="btn-group">
                                <button className="btn btn-sm btn-primary" disabled>Edit</button>
                                <button className="btn btn-sm btn-danger" disabled>Remove</button>
                            </div></> :
                            <><div className="btn-group">
                                <button className="btn btn-sm btn-primary" onClick={() => dispatch(editTask(item.id))}>Edit</button>
                                <button className="btn btn-sm btn-danger" onClick={() => dispatch(delTask(item.id))}>Remove</button>
                            </div></>}
                            <div className="btn-group">
                                <button className="btn btn-sm btn-warning" disabled={item.bringDownDisabled}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                                    </svg>
                                </button>
                                <button className="btn btn-sm btn-success" disabled={item.bringUpDisabled}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"></path>
                                    </svg>
                                </button>
                            </div>
                        </td>
                        <td className="">
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={()=> dispatch(statusToggler(item.id, i))}/>
                            </div>
                        </td>
                    </tr>
                }) : null}
            </tbody>
        </table>
    </>
}

export default Table;