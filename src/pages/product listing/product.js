// Array of Frame Objects
const frames = [
    {
        id: 1,
        name: "Classic Wood",
        category: "Wall Frame",
        price: 25,
        image: "https://socialprintstudio.com/cdn/shop/files/gallery-frames-4.jpg?v=1724964668&width=1946",
        sizeOptions: ["Small", "Medium", "Large"],
        colorOptions: ["Black", "Brown"],
        style: "Classic"
    },
    {
        id: 2,
        name: "Modern Black",
        category: "Tabletop Frame",
        price: 30,
        image: "https://framer.pk/cdn/shop/products/Set-of-7-Frames-Collage-02-RV.jpg?v=1666877519",
        sizeOptions: ["Medium", "Large"],
        colorOptions: ["Black", "White"],
        style: "Modern"
    },
    {
        id: 3,
        name: "Vintage Gold",
        category: "Custom Frame",
        price: 40,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpQUTU_g6VyPLZpgAUgVb2bt8BoYjalDsOSw&s",
        sizeOptions: ["Large"],
        colorOptions: ["Gold"],
        style: "Vintage"
    },
    {
        id: 4,
        name: "Minimalist White",
        category: "Wall Frame",
        price: 20,
        image: "https://img.freepik.com/free-vector/minimalist-white-frame_23-2147504491.jpg",
        sizeOptions: ["Small", "Medium"],
        colorOptions: ["White"],
        style: "Minimalist"
    },
    {
        id: 5,
        name: "Rustic Brown",
        category: "Tabletop Frame",
        price: 35,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQWt_kqLGpNbONZ40UEUuTheQu9htdCYldag&s",
        sizeOptions: ["Medium"],
        colorOptions: ["Brown"],
        style: "Rustic"
    },
    {
        id: 6,
        name: "Personalized Name Frame",
        category: "Custom Frame",
        price: 50,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpF-FOdg-AhSRsOCithuk6w7ywI4Rm7uSwrg&s",
        sizeOptions: ["Small", "Medium", "Large"],
        colorOptions: ["Black", "Gold", "Silver"],
        style: "Customized"
    },
    {
        id: 7,
        name: "Wedding Photo Frame",
        category: "Custom Frame",
        price: 60,
        image: "https://m.media-amazon.com/images/I/81E16CV4V0L._AC_UF894,1000_QL80_.jpg",
        sizeOptions: ["Medium", "Large"],
        colorOptions: ["White", "Beige", "Silver"],
        style: "Wedding"
    },
    {
        id: 8,
        name: "Family Portrait Frame",
        category: "Wall Frame",
        price: 45,
        image: "https://5.imimg.com/data5/SELLER/Default/2021/4/VS/DX/RF/64606836/02-jpg-250x250.jpg",
        sizeOptions: ["Large"],
        colorOptions: ["Black", "Brown"],
        style: "Family"
    },
    {
        id: 9,
        name: "Artistic Custom Frame",
        category: "Custom Frame",
        price: 55,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTeLN4gkaEXGrvuDH_4y2b8kSNWo9ltw19zA&s",
        sizeOptions: ["Medium", "Large"],
        colorOptions: ["Walnut", "Oak", "White"],
        style: "Artistic"
    },
   
];


// Function to Display Frames
function displayFrames(frameArray) {
    const frameList = document.getElementById("frameList");
    frameList.innerHTML = ""; // Clear previous content

    frameArray.forEach(frame => {
        frameList.innerHTML += `
            <div class="bg-white p-4 rounded-lg shadow-md text-center">
                <img src="${frame.image}" alt="${frame.name}" class="w-full h-40 object-cover mb-2">
                <h3 class="text-xl font-semibold">${frame.name}</h3>
                <p class="text-gray-600">${frame.category}</p>
                <p class="text-blue-600 font-bold">$${frame.price}</p>
                <button onclick="customizeFrame(${frame.id})" class="bg-green-500 text-white px-4 py-2 mt-2 rounded">Customize</button>
            </div>
        `;
    });
}

// Function to Sort Frames
function sortFrames(property, order) {
    const sortedFrames = [...frames].sort((a, b) => {
        return order === "asc" ? a[property] - b[property] : b[property] - a[property];
    });
    displayFrames(sortedFrames);
}

// Function to Filter Frames by Category
function filterFrames() {
    const selectedCategory = document.getElementById("filterCategory").value;
    const filteredFrames = selectedCategory ? frames.filter(frame => frame.category === selectedCategory) : frames;
    displayFrames(filteredFrames);
}

// Function to Customize Frame
function customizeFrame(frameId) {
    alert(`Customization options will be available for Frame ID: ${frameId}`);
}

// Load frames when the page loads
document.addEventListener("DOMContentLoaded", () => {
    displayFrames(frames);
});
