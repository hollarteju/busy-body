export default function OtherGroup({groups}){
    return(
        <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[...groups, ...groups].map((group, index) => (
                <div key={`${group.id}-${index}`} className="border rounded-lg overflow-hidden">
                <img
                    src={group.image}
                    alt={group.name}
                    className="w-full h-32 object-cover"
                />
                <div className="p-3">
                    <h3 className="font-semibold text-gray-900 mb-1">{group.name}</h3>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <span>{group.members} Member</span>
                    <span>{group.postsToday} Posts today</span>
                    </div>
                    <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded font-medium transition-colors">
                    Join
                    </button>
                </div>
                </div>
            ))}
            </div>
        </div>
    )
}