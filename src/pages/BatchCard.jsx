import { Calendar, BookOpen } from "lucide-react";

export default function BatchCard({ batch }) {
  const formatDate = (dateStr) => {
    return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(new Date(dateStr));
  };

  const getBadgeText = (id) => {
    const mod = id % 3;
    if (mod === 1) return "Multiple plans included, Pro";
    if (mod === 2) return "Online Center";
    return "Two-way Interaction";
  };

  const getMetaText = (id, startDate, badgeText) => {
    const mod = id % 3;
    if (mod === 1 || mod === 0) {
      return `Ongoing Started on ${formatDate(startDate)}`;
    }
    return `Experienced faculty ${badgeText}`;
  };

  const getButtonText = (id) => {
    const mod = id % 3;
    if (mod === 0) return "Buy Now";
    if (mod === 1) return "Book a Seat";
    return "Explore";
  };

  const getButtonClass = (id) => {
    const mod = id % 3;
    if (mod === 0) return "bg-green-600 hover:bg-green-700";
    if (mod === 1) return "bg-blue-600 hover:bg-blue-700";
    return "bg-black hover:bg-gray-800";
  };

  const badgeText = getBadgeText(batch.id);
  const metaText = getMetaText(batch.id, batch.startDate, badgeText);
  const buttonText = getButtonText(batch.id);
  const buttonClass = getButtonClass(batch.id);

  const getIcon = () => metaText.includes('Ongoing') ? <BookOpen size={14} /> : <Calendar size={14} />;

  return (
    <div className="bg-white rounded-2xl border shadow-sm hover:shadow-lg transition overflow-hidden">

      {/* IMAGE */}
      <div className="relative">
        <img
          src={batch.imageUrl}
          alt={batch.title}
          className="w-full h-48 object-cover"
        />

        <span className="absolute top-3 left-3 bg-white text-black text-xs px-3 py-1 rounded-full border">
          {badgeText}
        </span>

        <span className="absolute top-3 right-3 bg-white text-black text-xs px-3 py-1 rounded-full border">
          {batch.language}
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-4 space-y-2">
        <h3 className="font-bold text-lg leading-tight">
          {batch.title}
        </h3>

        <p className="text-sm text-gray-500 line-clamp-2">
          {batch.description}
        </p>

        {/* META */}
        <div className="flex items-center gap-3 text-sm text-gray-600 mt-2">
          {getIcon()}
          <span>{metaText}</span>
        </div>

        {/* PRICE */}
        <div className="flex items-end justify-between mt-4">
          <div>
            <p className="text-lg font-bold">
              ₹{batch.price}
              <span className="text-sm text-gray-400 line-through ml-2">
                ₹{batch.originalPrice}
              </span>
            </p>
            <p className="text-green-600 text-sm font-medium">
              {batch.discountPercent}% OFF
            </p>
          </div>

          <button className={`${buttonClass} text-white px-4 py-2 rounded-lg transition ${buttonText === 'Explore' ? 'flex items-center gap-1' : ''}`}>
            {buttonText}
            {buttonText === 'Explore' && '→'}
          </button>
        </div>
      </div>
    </div>
  );
}