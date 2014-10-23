$(document).ready(function() {

    var gmgQuotes = [
        "Hanap hanap din pag may time.",
        "Itanong mo kay Kuyang Google.",
        "Hindi porket naka FREE FACEBOOK ka, sa FACEBOOK ka na magtatanong.",
        "Bawas bawas din ng pag tatanong pag may time...",
        "If you're not willing to learn, no one can help you.",
        "Pwede naman kasing i-search. Ba't magtatanong pa.",
        "Torpe ka ba? Search mo 'Torpe Tips'",
        "Magtatanong ka pa lang, nahanap ko na.",
        "Kamusta naman ang pag hahanap?",
        "Wala kang mahanap? Search mo 'Prolapse'"
    ];

    var gmgTitle = ["MO, GAGO","MO BHE","MO ATE","MO KUYA","MO SIR","MO DRE","MO PARE","MO MISS","MO KAYA","MO BRAD","MO BRO","MO SIS","MO KASE","MO LANG"]
    
    var quotes = gmgQuotes[Math.round(Math.random() * (gmgQuotes.length - 1))];
    var title = gmgTitle[Math.round(Math.random() * (gmgTitle.length - 1))];

    $("#quotes").append(quotes);
    $(".gtits").append(title);

    function e(n) {
        var n = $.extend({}, a, n);
        n.term = $("#term").val() || n.term;
        var r = "http://ajax.googleapis.com/ajax/services/search/" + n.type + "?v=1.0&callback=?",
            o = $("#resultsDiv");
        $.getJSON(r, {
            q: n.term,
            rsz: n.perPage,
            start: n.page * n.perPage
        }, function(r) {
            var s = r.responseData.results;
            if ($("#more").remove(), s.length) {
                for (var p = $("<br><div>", {
                    className: "pageContainer"
                }), l = 0; l < s.length; l++) p.append(new t(s[l]) + "");
                n.append || o.empty(), p.append('<div class="clear"></div>').hide().appendTo(o).fadeIn("slow");
                var c = r.responseData.cursor; + c.estimatedResultCount > (n.page + 1) * n.perPage && $('<br><button id="more" class="btn btn-info center-block" type="button">More Results</button><br><br>').appendTo(o).click(function() {
                    e({
                        append: !0,
                        page: n.page + 1
                    }), $(this).fadeOut()
                })
            } else o.empty(), $('#information-modal').modal('show');
        })
    }

    function t(e) {
        var t = ['<div class="webResult">', '<h2><a href="', e.unescapedUrl, '" target="_blank">', e.title, "</a></h2>", "<p>", e.content, "</p>", '<a href="', e.unescapedUrl, '" target="_blank">', e.visibleUrl, "</a>", "</div>"];
        this.toString = function() {
            return t.join("")
        }
    }

    var a = {
        type: "web",
        append: !1,
        perPage: 8,
        page: 0
    };

    $("#term").keydown(function(e) {
        13 == e.keyCode && (e.preventDefault(), $("#searchBtn").click())
    })

    $("#searchBtn").on("click", function() {
        $('#resultsDiv').animatescroll();
        return e(a), !1
    })
});
