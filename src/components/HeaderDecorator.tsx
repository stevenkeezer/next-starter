
import clsx from "clsx"

const HeaderDecorator = ({center = true}) => {
    return (
        <div className={clsx("mb-10", center ? "text-center": "text-left")}>
            <span className="inline-block w-1 h-1 rounded-full bg-blue-400 ml-1"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-blue-400 ml-1"></span>
            <span className="inline-block w-40 h-1 rounded-full bg-blue-400"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-blue-400 ml-1"></span>
            <span className="inline-block w-1 h-1 rounded-full bg-blue-400 ml-1"></span>
        </div>
    )
}

export default HeaderDecorator