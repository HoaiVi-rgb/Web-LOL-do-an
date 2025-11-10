            document.addEventListener('DOMContentLoaded', function() {
            const riotMenuTrigger = document.getElementById('riot-menu-trigger');
            const riotMegaMenu = document.getElementById('riot-mega-menu');
            const closeRiotMenu = document.getElementById('close-riot-menu');
            const mainNav = document.getElementById('main-nav');
            const searchBtn = document.getElementById('search-btn');
            const searchInput = document.querySelector('.search-input');

             // Thêm: Lấy các element của Play Now Modal
            const playNowTrigger = document.getElementById('play-now-trigger');
            const playNowOverlay = document.getElementById('play-now-overlay');
            const closePlayNowModal = document.getElementById('close-play-now-modal');

             // Mở Mega Menu
            riotMenuTrigger.addEventListener('click', function(event) {
                event.stopPropagation();
                riotMegaMenu.classList.add('active');
            });

            // Đóng Mega Menu
            function closeMegaMenu() {
                riotMegaMenu.classList.remove('active');
            }

            closeRiotMenu.addEventListener('click', closeMegaMenu);
            riotMegaMenu.addEventListener('click', function(event) {
                if (event.target === riotMegaMenu) {
                    closeMegaMenu();
                }
            });

            // Mở/Đóng thanh tìm kiếm
            searchBtn.addEventListener('click', function(event) {
                event.stopPropagation();
                mainNav.classList.toggle('search-active');
                if (mainNav.classList.contains('search-active')) {
                    searchInput.focus();
                }
            });

            // Đóng thanh tìm kiếm khi click ra ngoài
            document.addEventListener('click', function(event) {
                const isClickInsideNav = mainNav.contains(event.target);
                if (!isClickInsideNav && mainNav.classList.contains('search-active')) {
                    mainNav.classList.remove('search-active');
                }
            });

            // Thêm: Logic cho Play Now Modal
             // Mở Play Now Modal
            playNowTrigger.addEventListener('click', function(event) {
                event.preventDefault(); // Ngăn thẻ <a> chuyển trang
                playNowOverlay.classList.add('active');
            });

            // Đóng Play Now Modal
            function closePlayNowModalFunc() {
                playNowOverlay.classList.remove('active');
            }

            closePlayNowModal.addEventListener('click', closePlayNowModalFunc);
            playNowOverlay.addEventListener('click', function(event) {
                if (event.target === playNowOverlay) {
                    closePlayNowModalFunc();
                }
            });
        });