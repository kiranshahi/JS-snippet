/** Pagination Section **/
            pagination: function (totalPage) {
                var currentPage = Role.config.pageNumber;
                var previous = (currentPage == 1) ? 1 : currentPage - 1;
                var next = (currentPage == totalPage) ? totalPage : currentPage + 1;
                var firstPaginationLink = (currentPage < 4) ? 1 : currentPage - 3;
                var lastPaginationLink = (currentPage > (totalPage - 4)) ? totalPage : currentPage + 3;

                var pageLink = "";
                if (currentPage != 1) {
                    pageLink += "<a class='prev' data-page='" + previous + "'></a>";
                }
                if (totalPage <= 7) {
                    for (var i = 1; i <= totalPage; i++) {
                        if (i == 1) {
                            pageLink += "<a data-page='" + i + "'>" + i + "</a>";
                        } else {
                            pageLink += "<a data-page='" + i + "'>" + i + "</a>";
                        }
                    }
                } else if (currentPage < 4 && totalPage > 7) {
                    for (var i = firstPaginationLink; i <= 7; i++) {
                        if (i == 1) {
                            pageLink += "<a data-page='" + i + "'>" + i + "</a>";
                        } else {
                            pageLink += "<a data-page='" + i + "'>" + i + "</a>";
                        }
                    }
                } else if (lastPaginationLink < currentPage + 7) {
                    for (var i = lastPaginationLink - 6; i <= lastPaginationLink; i++) {
                        if (i == 1) {
                            pageLink += "<a data-page='" + i + "'>" + i + "</a>";
                        } else {
                            pageLink += "<a data-page='" + i + "'>" + i + "</a>";
                        }
                    }
                }
                else {
                    for (var i = firstPaginationLink; i <= lastPaginationLink; i++) {
                        if (i == 1) {
                            pageLink += "<a data-page='" + i + "'>" + i + "</a>";
                        } else {
                            pageLink += "<a data-page='" + i + "'>" + i + "</a>";
                        }
                    }
                }
                if (currentPage != next) {
                    pageLink += "<a data-page='" + next + "' class='next'></a>";
                }
                $(".pagination").html(pageLink);
                $('a[data-page=' + Role.config.pageNumber + ']').addClass('current');
            },

            getTotalPage: function (totalRow) {
                var totalPage;
                if ((totalRow % Role.config.postPerPage) == 0) {
                    totalPage = totalRow / Role.config.postPerPage;
                } else {
                    totalPage = totalRow / Role.config.postPerPage + 1;
                }
                return parseInt(totalPage);
            },

            changePagination: function () {
                $('a[data-page =' + Role.config.pageNumber + ']').addClass('current');
                $(document).on('click', '.pagination a', function () {
                    Role.config.pageNumber = $(this).data("page");
                    Role.getRoleList();
                });
            },