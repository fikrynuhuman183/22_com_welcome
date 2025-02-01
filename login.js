
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".contact-box .button").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior

        let allowedENumbers = ["E/22/001", "E/22/004", "E/22/008","E/22/010", "E/22/014", "E/22/018","E/22/027", "E/22/032", "E/22/034","E/22/035",
                                "E/22/036", "E/22/044", "E/22/051","E/22/052", "E/22/054", "E/22/056","E/22/058", "E/22/060", "E/22/61","E/22/074",
                                "E/22/084", "E/22/102", "E/22/120","E/22/121", "E/22/124", "E/22/125","E/22/126", "E/22/127", "E/22/130","E/22/131",
                                "E/22/132", "E/22/135", "E/22/138","E/22/141", "E/22/142", "E/22/151","E/22/154", "E/22/157", "E/22/159","E/22/176",
                                "E/22/179", "E/22/180", "E/22/182","E/22/184", "E/22/188", "E/22/193","E/22/203", "E/22/205", "E/22/211","E/22/214",
                                "E/22/227", "E/22/228", "E/22/232","E/22/233", "E/22/237", "E/22/248","E/22/250", "E/22/253", "E/22/260","E/22/261",
                                "E/22/269", "E/22/271", "E/22/280","E/22/288", "E/22/291", "E/22/296","E/22/301", "E/22/303", "E/22/320","E/22/322",
                                "E/22/323", "E/22/324", "E/22/328","E/22/330", "E/22/336", "E/22/337","E/22/353", "E/22/354", "E/22/362","E/22/364",
                                "E/22/366", "E/22/372", "E/22/373","E/22/378", "E/22/381", "E/22/382","E/22/385", "E/22/396", "E/22/397","E/22/400",
                                "E/22/402", "E/22/405", "E/22/409","E/22/419", "E/22/421", "E/22/425","E/22/427", "E/22/443", "E/22/449","E/22/452",
                                "E/21/087","E/21/138"];
        let inputField = document.querySelector("#eNumberInput");
        let errorMessage = document.querySelector("#errorMessage");
        let userENumber = inputField.value.trim();

        if (allowedENumbers.includes(userENumber)) {
            errorMessage.style.display = "none"; // Hide error if valid
            
            // -------------------------------------
            localStorage.setItem("userENumber", userENumber);

            window.location.href = "game_web_page/index5.html";
        } else {
            errorMessage.style.display = "block"; // Show error if invalid
        }
        
        function getValue() {
            return userENumber;
        }


    });
});
