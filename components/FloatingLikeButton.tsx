import { FaHeart } from "react-icons/fa";

interface FloatingHeartProps {
    liked: boolean;
    onToggle: () => void;
}

export default function FloatingLikeButton({ liked, onToggle }: FloatingHeartProps) {
    return (
        <div>
            <button
                onClick={onToggle}
                className="fixed top-3 right-6 p-3 bg-black/40 rounded-full backdrop-blur-md shadow-lg transition-transform hover:scale-110"
            >
                <FaHeart
                    size={28}
                    className={`transition-all duration-300 ${liked ? "text-white scale-100" : "text-red-600 scale-100"
                        }`}
                />
            </button>
        </div>
    )
}