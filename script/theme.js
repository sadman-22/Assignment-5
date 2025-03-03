const colors = ["bg-gray-900", "bg-[#FFA07A]", "bg-fuchsia-900", "bg-blue-300", "bg-purple-500"];
        let currentIndex = 0;

        document.getElementById("theme-btn").addEventListener("click", function() {
            document.body.classList.remove(...colors);
            document.body.classList.add(colors[currentIndex]);
            currentIndex = (currentIndex + 1) % colors.length;
        });