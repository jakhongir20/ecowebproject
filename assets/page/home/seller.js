(function (window, document, $) {
    'use strict';
    const selectElement = document.querySelector('#searchProductField');
    const basketElement = document.querySelector('.nav-link-basket i');
    const basketCloseElement = document.querySelector('.app-file-action-icons i');
    const appContentOverlay = $(".content-overlay");
        // const contractorModal = document.querySelector('#openContractorProfile');
        // const contractorModalCloseElement = document.querySelector('.app-file-action-icons i');
        //
        // contractorModal.addEventListener("click",(event)=>{
        //     appContentOverlay.addClass("show");
        //     $("#contractorModal").addClass("show");
        // });

    // basketCloseElement.addEventListener("click", (event) => {
    //     $("#contractorModal").removeClass("show");
    //     appContentOverlay.removeClass("show");
    // });

    basketElement.addEventListener("click", (event) => {
        appContentOverlay.addClass("show");
        $(".orders").addClass("show");
    });

    basketCloseElement.addEventListener("click", (event) => {
        $(".orders").removeClass("show");
        appContentOverlay.removeClass("show");

    });


    // selectElement.addEventListener('keyup', (event) => {
    //     $("#searchIcon").playLiviconEvo();
    //     if (selectElement.value.length >= 3) {
    //         $("#search_input_messages").addClass("hidden");
    //         $("#searchResult").removeClass("hidden");
    //         $("#searchResult").addClass("show");
    //
    //     } else {
    //         $("#search_input_messages").removeClass("hidden");
    //         $("#searchResult").addClass("hidden");
    //     }
    // });
    // selectElement.addEventListener('focusout', (event) => {
    //     //$("#searchProductField").text("");
    //     $("#search_input_messages").addClass("hidden");
    // });


    // Sidebar menu close button on click remove show class form both sidebar-left and App content overlay
    $(".app-file-sidebar-close").on('click', function () {
        sideBarLeft.removeClass('show');
        appContentOverlay.removeClass('show');
    });
    // On screen Resize JS
    // -----------------------------------
    $(window).on("resize", function () {
        // remove show classes from sidebar and overlay if size is > 768
        if ($(window).width() > 768) {
            if (appContentOverlay.hasClass('show')) {
                sideBarLeft.removeClass('show');
                appContentOverlay.removeClass('show');
                sideBarInfo.removeClass('show');
            }
        }
    });
    //// Loading array data
    //var data = [
    //    {id: 0, text: 'enhancement' },
    //    {id: 1, text: 'bug' },
    //    {id: 2, text: 'duplicate' },
    //    {id: 3, text: 'invalid' },
    //    {id: 4, text: 'wontfix' }
    //];

    //$(".select2-data-array").select2({
    //    dropdownAutoWidth: true,
    //    width: '100%',
    //    data: data
    //});

    // Loading remote data
    //$("#searchProductField").select2({
    //    dropdownAutoWidth: true,
    //    width: '100%',
    //    ajax: {
    //        url: "https://api.github.com/search/repositories",
    //        dataType: 'json',
    //        delay: 250,
    //        data: function (params) {
    //            return {
    //                q: params.term, // search term
    //                page: params.page
    //            };
    //        },
    //        processResults: function (data, params) {
    //            // parse the results into the format expected by Select2
    //            // since we are using custom formatting functions we do not need to
    //            // alter the remote JSON data, except to indicate that infinite
    //            // scrolling can be used
    //            params.page = params.page || 1;

    //            return {
    //                results: data.items,
    //                pagination: {
    //                    more: (params.page * 30) < data.total_count
    //                }
    //            };
    //        },
    //        cache: true
    //    },
    //    placeholder: 'Поиск по наименованиям',
    //    escapeMarkup: function (markup) { return markup; }, // let our custom formatter work
    //    minimumInputLength: 1,
    //    //templateResult: formatRepo,
    //    //templateSelection: formatRepoSelection
    //});

    //function formatRepo(repo) {
    //    if (repo.loading) return repo.text;

    //    var markup = "<div class='select2-result-repository clearfix'>" +
    //        "<div class='select2-result-repository__avatar'><img src='" + repo.owner.avatar_url + "' /></div>" +
    //        "<div class='select2-result-repository__meta'>" +
    //        "<div class='select2-result-repository__title'>" + repo.full_name + "</div>";

    //    if (repo.description) {
    //        markup += "<div class='select2-result-repository__description'>" + repo.description + "</div>";
    //    }

    //    markup += "<div class='select2-result-repository__statistics'>" +
    //        "<div class='select2-result-repository__forks'><i class='icon-code-fork mr-0'></i> " + repo.forks_count + " Forks</div>" +
    //        "<div class='select2-result-repository__stargazers'><i class='icon-star5 mr-0'></i> " + repo.stargazers_count + " Stars</div>" +
    //        "<div class='select2-result-repository__watchers'><i class='icon-eye mr-0'></i> " + repo.watchers_count + " Watchers</div>" +
    //        "</div>" +
    //        "</div></div>";

    //    return markup;
    //}

    //function formatRepoSelection(repo) {
    //    return repo.full_name || repo.text;
    //}


    //// Customizing how results are matched
    //function matchStart(term, text) {
    //    if (text.toUpperCase().indexOf(term.toUpperCase()) === 0) {
    //        return true;
    //    }

    //    return false;
    //}

    //$.fn.select2.amd.require(['select2/compat/matcher'], function (oldMatcher) {
    //    $(".select2-customize-result").select2({
    //        dropdownAutoWidth: true,
    //        width: '100%',
    //        placeholder: "Search by 'r'",
    //        matcher: oldMatcher(matchStart)
    //    });
    //});

    //// Theme support
    //$(".select2-theme").select2({
    //    dropdownAutoWidth: true,
    //    width: '100%',
    //    placeholder: "Classic Theme",
    //    theme: "classic"
    //});

    ///******************/
    //// Sizing options //
    ///*****************/

    //// Large
    //$('.select2-size-lg').select2({
    //    dropdownAutoWidth: true,
    //    width: '100%',
    //    containerCssClass: 'select-lg'
    //});

    //// Small
    //$('.select2-size-sm').select2({
    //    dropdownAutoWidth: true,
    //    width: '100%',
    //    containerCssClass: 'select-sm'
    //});

})(window, document, jQuery);