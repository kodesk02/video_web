interface ButtonProps {
    title: string;
    className?: string;
}

export default function Button({
    title,
    className
}: ButtonProps) {
    return (
        <div className={`px-4 text-xs rounded-lg py-2 inset-shadow-sm inset-shadow-gray-800 border-white bg-white/10 backdrop-blur-sm shadow-2xl ${className}`}>
            <div>
                <span className="absolute -bottom-1 right-1 h-6 w-6 rounded-full bg-gray-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100 blur-lg"></span>
                <span className="text-gray-800">{title}</span>
            </div>
        </div>
    )
}