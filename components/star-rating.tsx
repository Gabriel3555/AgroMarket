import { Star } from "lucide-react"

interface StarRatingProps {
  rating: number
  totalReviews?: number
}

export function StarRating({ rating, totalReviews }: StarRatingProps) {
  return (
    <div className="flex items-center">
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
        ))}
      </div>
      {totalReviews !== undefined && <span className="text-xs text-gray-500 ml-1">({totalReviews})</span>}
    </div>
  )
}
