const Characteristics = () => {
    const filterItems = [
        { label: "ability", id: "ability" },
        { label: "quality", id: "quality" },
        { label: "size", id: "size" },
        { label: "gallop", id: "gallop" },
        { label: "blood", id: "blood" },
        { label: "technique", id: "technique" },
        { label: "balance", id: "balance" },
        { label: "rideability", id: "rideability" },
    ]
    return (
        <div className="w-full text-center">
            <div className="gap-5 my-16 grid grid-cols-2 md:grid-cols-4">
                {filterItems.map((item) =>
                <div key={item.id}
                >
                    <p>{item.label}</p>
                </div>
                )}
            </div>
        </div>
    );
};

export default Characteristics;