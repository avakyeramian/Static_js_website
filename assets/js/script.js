window.onload = content;


function content()
{
    
    //  Avak Yeramian
    //
    //  GNU GENERAL PUBLIC LICENSE Version 3
    //
    // The GNU General Public License is a free, copyleft license for software and other kinds of works.

    //  The licenses for most software and other practical works are designed to take away your freedom to share and change the works.
    //  By contrast, the GNU General Public License is intended to guarantee your freedom to share and change all versions of a program--to make sure it remains free software for all its users. We, the Free Software Foundation, use the GNU General Public License for most of our software; it applies also to any other work released this way by its authors. You can apply it to your programs, too.
    //
    
    var document = window.document;
    var alert = window.alert;
    var console = window.console;
    var body = document.body;
    var header = document.createElement("header");
    var footer = document.createElement("footer");
    var temp_a;
    var temp_li;
    var header_menu = {};
    var footer_liste = {};
    var date = new Date();
    
    /* -- Config -- */
    
    /* Header */
    var header_titre = "Titre du site";
    header_menu["Accueil"] = ".";
    header_menu["Page1"] = "page1.html";
    header_menu["Page2"] = "page2.html";
    
    /* Footer */
    footer_liste["Twitter"] = "https://twitter.com/avakyeramian";
    footer_liste["Youtube"] = "https://www.youtube.com/user/linuxavak";
    footer_liste["GitHub"] = "https://github.com/avakyeramian";
    var footer_auteur = "Avak Yeramian";
    var footer_annee = date.getFullYear();
    
    /* -- Config -- */
    
    var header_h1 = document.createElement("h1");
    header_h1.innerHTML = header_titre;
    header.append(header_h1);
        
    var header_nav = document.createElement("nav");
    for(var menu in header_menu){
        temp_a = document.createElement("a");
        temp_a.setAttribute("href",header_menu[menu]);
        temp_a.innerHTML = menu;
        header_nav.append(temp_a);
    }
    header.append(header_nav);
    
    var footer_ul = document.createElement("ul");
    for(var liste in footer_liste){
        temp_a = document.createElement("a");
        temp_li = document.createElement("li");
        temp_a.setAttribute("href",footer_liste[liste]);
        temp_a.setAttribute("target","_blank");
        temp_a.innerHTML = liste;
        temp_li.append(temp_a);
        footer_ul.append(temp_li);
    }
    footer.append(footer_ul);
    
    var footer_p = document.createElement("p");
    footer_p.innerHTML = footer_auteur + " - " + footer_annee;
    footer.append(footer_p);
    
    body.prepend(header);
    body.append(footer);
}