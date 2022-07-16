import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";

const InputTask = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = data => {
        dispatch(addTask(data));
        reset({
            task: "",
        });
    }

    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row mt-4">
                <div className="col-10 col-md-10 col-sm-10">
                    <input type="text" className="form-control ps-2" placeholder="What you gonna do??" 
                    {...register("task", { required: "This field is required..",
                    maxLength:{
                        value: 20,
                        message: "The field is exeeding its maximum limit.."
                    } })} />
                </div>
                <div className="invalid-feedback">Please help me..</div>
                <div className="col-2 col-md-2 col-sm-2">
                    <button type="submit" className="btn btn-success">Add Task</button>
                </div>
            </div>
        </form>
    </>
}

export default InputTask;