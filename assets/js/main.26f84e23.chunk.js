(this.webpackJsonpvaler1us_1=this.webpackJsonpvaler1us_1||[]).push([[0],{42:function(e,a,t){},48:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t(1),c=t.n(s),r=t(14),i=t.n(r),l=(t(42),t(19)),j=t(13),p=t(68),d=t(64),b=t(66),m=t(67),o=t(17);function h(e){return"Bitte wählen"!==e}function x(e){var a=Object(o.a)(),t=a.register,s=a.handleSubmit,c=a.errors;return Object(n.jsxs)("form",{className:"app-form",onSubmit:s((function(a){console.log(a),e.setDataCallback(a),e.setSectionCallback(2)})),children:[Object(n.jsxs)(d.a,{container:!0,alignItems:"center",className:"app-headerContainer",children:[Object(n.jsx)(d.a,{item:!0,md:6,xs:12,children:Object(n.jsx)(b.a,{variant:"subtitle1",className:"app-title1",children:Object(n.jsx)("b",{children:"Finanzierungsvorhaben"})})}),Object(n.jsx)(d.a,{item:!0,md:6,xs:12,children:Object(n.jsx)(b.a,{variant:"body2",className:"app-step",children:"Schritt 1/3"})})]}),Object(n.jsxs)(d.a,{container:!0,alignItems:"center",children:[Object(n.jsx)(d.a,{item:!0,md:5,xs:12,children:Object(n.jsxs)("label",{className:"app-label",children:["Finanzierungszweck",Object(n.jsx)("sup",{className:"app-required",children:"*"})]})}),Object(n.jsx)(d.a,{item:!0,md:7,xs:12,children:Object(n.jsxs)("select",{className:"app-input",ref:t({required:!0,validate:function(e){return h(e)}}),name:"finanzierungszweck",id:"app-finanzierungszweck",children:[Object(n.jsx)("option",{value:"Bitte wählen",children:"Bitte wählen"}),Object(n.jsx)("option",{value:"Kauf einer besthenden Immobilie",children:"Kauf einer besthenden Immobilie"}),Object(n.jsx)("option",{value:"Neubau (Kauf vom Bautrager)",children:"Neubau (Kauf vom Bautrager)"}),Object(n.jsx)("option",{value:"Neubau (eigenes Bauvorhaben)",children:"Neubau (eigenes Bauvorhaben)"}),Object(n.jsx)("option",{value:"An-/Umbau, Modernisierung",children:"An-/Umbau, Modernisierung"}),Object(n.jsx)("option",{value:"Anschlussfinanzierung/Forward Darlehen",children:"Anschlussfinanzierung/Forward Darlehen"}),Object(n.jsx)("option",{value:"Kapitalbeschaffung",children:"Kapitalbeschaffung"})]})})]}),Object(n.jsxs)(d.a,{container:!0,className:"app-errorContainer",children:[Object(n.jsx)(d.a,{item:!0,md:5,xs:12}),Object(n.jsx)(d.a,{item:!0,md:7,xs:12,className:"app-error",children:c.finanzierungszweck&&"⚠ Eingabe erforderlich."})]}),Object(n.jsxs)(d.a,{container:!0,alignItems:"center",children:[Object(n.jsx)(d.a,{item:!0,md:5,xs:12,children:Object(n.jsxs)("label",{className:"app-label",children:["Nettodarlehensbetrag",Object(n.jsx)("sup",{className:"app-required",children:"*"})]})}),Object(n.jsxs)(d.a,{item:!0,md:7,xs:12,children:[Object(n.jsx)("input",{min:"0",className:"app-input app-euroInputs",ref:t({required:!0}),name:"nettodarlehensbetrag",type:"number"}),Object(n.jsx)("span",{className:"app-euro",children:"€"})]})]}),Object(n.jsxs)(d.a,{container:!0,className:"app-errorContainer",children:[Object(n.jsx)(d.a,{item:!0,md:5,xs:12}),Object(n.jsx)(d.a,{item:!0,md:7,xs:12,className:"app-error",children:c.nettodarlehensbetrag&&"⚠ Eingabe erforderlich."})]}),Object(n.jsxs)(d.a,{container:!0,alignItems:"center",children:[Object(n.jsx)(d.a,{item:!0,md:5,xs:12,children:Object(n.jsx)("label",{className:"app-label",children:"gewünschte mtl. Rate"})}),Object(n.jsxs)(d.a,{item:!0,md:7,xs:12,children:[Object(n.jsx)("input",{min:"0",className:"app-input app-euroInputs",ref:t,name:"gewunschteMtlRate",type:"number",andor:!0}),Object(n.jsx)("span",{className:"app-euro",children:"€"})]})]}),Object(n.jsx)(b.a,{variant:"subtitle1",className:"app-title2",children:Object(n.jsx)("b",{children:"Objektdaten"})}),Object(n.jsxs)(d.a,{container:!0,alignItems:"center",children:[Object(n.jsx)(d.a,{item:!0,md:5,xs:12,children:Object(n.jsxs)("label",{className:"app-label",children:["Objektart",Object(n.jsx)("sup",{className:"app-required",children:"*"})]})}),Object(n.jsx)(d.a,{item:!0,md:7,xs:12,children:Object(n.jsxs)("select",{className:"app-input",ref:t({required:!0,validate:function(e){return h(e)}}),name:"objektart",id:"app-objektart",children:[Object(n.jsx)("option",{value:"Bitte wählen",children:"Bitte wählen"}),Object(n.jsx)("option",{value:"Wohnung",children:"Wohnung"}),Object(n.jsx)("option",{value:"Haus",children:"Haus"}),Object(n.jsx)("option",{value:"Wohn- und Geschaftshaus",children:"Wohn- und Geschaftshaus"}),Object(n.jsx)("option",{value:"Gewerbeimmobilie",children:"Gewerbeimmobilie"})]})})]}),Object(n.jsxs)(d.a,{container:!0,className:"app-errorContainer",children:[Object(n.jsx)(d.a,{item:!0,md:5,xs:12}),Object(n.jsx)(d.a,{item:!0,md:7,xs:12,className:"app-error",children:c.objektart&&"⚠ Eingabe erforderlich."})]}),Object(n.jsxs)(d.a,{container:!0,alignItems:"center",id:"app-nutzungsartGrid",children:[Object(n.jsx)(d.a,{item:!0,md:5,xs:12,children:Object(n.jsx)("label",{className:"app-label",children:"Nutzungsart"})}),Object(n.jsx)(d.a,{item:!0,md:7,xs:12,children:Object(n.jsxs)("select",{className:"app-input",ref:t({required:!0}),name:"nutzungsart",id:"app-nutzungsart",children:[Object(n.jsx)("option",{value:"Bitte wählen",children:"Bitte wählen"}),Object(n.jsx)("option",{value:"Eigennutzung",children:"Eigennutzung"}),Object(n.jsx)("option",{value:"Vermietung",children:"Vermietung"}),Object(n.jsx)("option",{value:"Teilvermietung",children:"Teilvermietung"})]})})]}),Object(n.jsxs)(d.a,{container:!0,alignItems:"center",children:[Object(n.jsx)(d.a,{item:!0,md:5,xs:12,children:Object(n.jsxs)("label",{className:"app-label",children:["PLZ",Object(n.jsx)("sup",{className:"app-required",children:"*"}),"/ Ort",Object(n.jsx)("sup",{className:"app-required",children:"*"})]})}),Object(n.jsx)("input",{className:"app-input app-plz",ref:t({required:!0}),name:"plzSection1"}),Object(n.jsx)("input",{className:"app-input app-ort",ref:t({required:!0}),name:"ortSection1"})]}),Object(n.jsxs)(d.a,{container:!0,className:"app-errorContainer",children:[Object(n.jsx)(d.a,{item:!0,md:5,xs:12}),Object(n.jsx)(d.a,{item:!0,md:7,xs:12,className:"app-error",children:c.plzSection1&&"⚠ Eingabe erforderlich."})]}),Object(n.jsxs)(d.a,{container:!0,className:"app-errorContainer",children:[Object(n.jsx)(d.a,{item:!0,md:5,xs:12}),Object(n.jsx)(d.a,{item:!0,md:7,xs:12,className:"app-error",children:c.ortSection1&&"⚠ Eingabe erforderlich."})]}),Object(n.jsxs)(d.a,{container:!0,alignItems:"center",id:"app-landGrid",children:[Object(n.jsx)(d.a,{md:5,xs:12,children:Object(n.jsx)("label",{className:"app-label",children:"Land"})}),Object(n.jsx)(d.a,{md:7,xs:12,children:Object(n.jsxs)("select",{className:"app-input",ref:t,name:"land",id:"app-land",children:[Object(n.jsx)("option",{value:"Bitte wählen",children:"Bitte wählen"}),Object(n.jsx)("option",{value:"Deutschland",children:"Deutschland"}),Object(n.jsx)("option",{value:"Spanien",children:"EU-Ausland"}),Object(n.jsx)("option",{value:"Spanien",children:"Auerhalb der EU"})]})})]}),Object(n.jsxs)(d.a,{container:!0,alignItems:"center",children:[Object(n.jsx)(d.a,{md:5,xs:12,children:Object(n.jsxs)("label",{className:"app-label",children:["Kosten des Objekts",Object(n.jsx)("sup",{className:"app-required",children:"*"})]})}),Object(n.jsxs)(d.a,{md:7,xs:12,children:[Object(n.jsx)("input",{min:"0",className:"app-input app-euroInputs",ref:t({required:!0}),name:"kosten",type:"number"}),Object(n.jsx)("span",{className:"app-euro",children:"€"})]})]}),Object(n.jsxs)(d.a,{container:!0,className:"app-errorContainer",children:[Object(n.jsx)(d.a,{item:!0,md:5,xs:12}),Object(n.jsx)(d.a,{item:!0,md:7,xs:12,className:"app-error",children:c.kosten&&"⚠ Eingabe erforderlich."})]}),Object(n.jsx)("div",{className:"app-buttonContainer",children:Object(n.jsx)(m.a,{type:"submit",className:"app-button app-nextButton",children:"Weiter"})})]})}var u=t(33);function O(e){return"Bitte Wahlen"!==e}var g=/^(((0[1-9]|[12][0-9]|3[01])[- /.](0[13578]|1[02])|(0[1-9]|[12][0-9]|30)[- /.](0[469]|11)|(0[1-9]|1\d|2[0-8])[- /.]02)[- /.]\d{4}|29[- /.]02[- /.](\d{2}(0[48]|[2468][048]|[13579][26])|([02468][048]|[1359][26])00))$/;function N(e){var a=Object(o.a)(),t=a.register,s=a.handleSubmit,c=a.errors;return Object(n.jsxs)("form",{className:"app-form",onSubmit:s((function(a){console.log(a),e.setDataCallback(a),e.setSectionCallback(3)})),children:[Object(n.jsxs)(d.a,{container:!0,alignItems:"center",className:"app-headerContainer",children:[Object(n.jsx)(d.a,{item:!0,md:6,xs:12,children:Object(n.jsx)(b.a,{variant:"subtitle1",className:"app-title1",children:Object(n.jsx)("b",{children:"Finanzierungsvorhaben"})})}),Object(n.jsx)(d.a,{item:!0,md:6,xs:12,children:Object(n.jsx)(b.a,{variant:"body2",className:"app-step",children:"Schritt 2/3"})})]}),Object(n.jsxs)(d.a,{container:!0,alignItems:"center",children:[Object(n.jsx)(d.a,{item:!0,md:5,xs:12,children:Object(n.jsxs)("label",{className:"app-label",children:["Anrede",Object(n.jsx)("sup",{className:"app-error",children:"*"})]})}),Object(n.jsx)(d.a,{item:!0,md:7,xs:12,children:Object(n.jsxs)("select",{className:"app-input",id:"app-anrede",ref:t({required:!0,validate:function(e){return O(e)}}),name:"anrede",children:[Object(n.jsx)("option",{value:"Bitte Wahlen",children:"Bitte Wahlen"}),Object(n.jsx)("option",{value:"Herr",children:"Herr"}),Object(n.jsx)("option",{value:"Frau",children:"Frau"})]})})]}),Object(n.jsxs)(d.a,{container:!0,className:"app-errorContainer",children:[Object(n.jsx)(d.a,{item:!0,md:5,xs:12}),Object(n.jsx)(d.a,{item:!0,md:7,xs:12,className:"app-error",children:c.anrede&&"⚠ Bitte auswählen."})]}),Object(n.jsxs)(d.a,{container:!0,alignItems:"center",children:[Object(n.jsx)(d.a,{item:!0,md:5,xs:12,children:Object(n.jsxs)("label",{className:"app-label",children:["Vorname",Object(n.jsx)("sup",{className:"app-error",children:"*"}),"/ Nachname",Object(n.jsx)("sup",{className:"app-error",children:"*"})]})}),Object(n.jsx)("input",{className:"app-input",id:"app-vorname",ref:t({required:!0}),name:"vorname"}),Object(n.jsx)("input",{className:"app-input",id:"app-nachname",ref:t({required:!0}),name:"nachname"})]}),Object(n.jsxs)(d.a,{container:!0,className:"app-errorContainer",children:[Object(n.jsx)(d.a,{item:!0,md:5,xs:12}),Object(n.jsx)(d.a,{item:!0,md:7,xs:12,className:"app-error",children:c.vorname&&"⚠ Eingabe erforderlich."})]}),Object(n.jsxs)(d.a,{container:!0,className:"app-errorContainer",children:[Object(n.jsx)(d.a,{item:!0,md:5,xs:12}),Object(n.jsx)(d.a,{item:!0,md:7,xs:12,className:"app-error",children:c.nachname&&"⚠ Eingabe erforderlich."})]}),Object(n.jsxs)(d.a,{container:!0,alignItems:"center",children:[Object(n.jsx)(d.a,{item:!0,md:5,xs:12,children:Object(n.jsxs)("label",{className:"app-label",children:["Geburtsdatum",Object(n.jsx)("sup",{className:"app-error",children:"*"})]})}),Object(n.jsx)(d.a,{item:!0,md:7,xs:12,children:Object(n.jsx)("input",{className:"app-input",id:"app-geburtsdatum",ref:t({required:!0,validate:function(e){return RegExp(g).test(e)}}),name:"geburtsdatum",placeholder:"TT.MM.JJJJ",style:{width:"250px"}})})]}),Object(n.jsxs)(d.a,{container:!0,className:"app-errorContainer",children:[Object(n.jsx)(d.a,{item:!0,md:5,xs:12}),Object(n.jsx)(d.a,{item:!0,md:7,xs:12,className:"app-error",children:c.geburtsdatum&&"⚠ Datumsformat TT.MM.JJJJ"})]}),Object(n.jsxs)(d.a,{container:!0,alignItems:"center",children:[Object(n.jsx)(d.a,{item:!0,md:5,xs:12,children:Object(n.jsxs)("label",{className:"app-label",children:["Straße",Object(n.jsx)("sup",{className:"app-error",children:"*"}),"/ Hausnummer",Object(n.jsx)("sup",{className:"app-error",children:"*"})]})}),Object(n.jsx)("input",{className:"app-input",id:"app-strasse",ref:t({required:!0}),name:"strasse"}),Object(n.jsx)("input",{className:"app-input",id:"app-hausnummer",ref:t({required:!0}),name:"hausnummer"})]}),Object(n.jsxs)(d.a,{container:!0,className:"app-errorContainer",children:[Object(n.jsx)(d.a,{item:!0,md:5,xs:12}),Object(n.jsx)(d.a,{item:!0,md:7,xs:12,className:"app-error",children:c.strasse&&"⚠ Eingabe erforderlich."})]}),Object(n.jsxs)(d.a,{container:!0,className:"app-errorContainer",children:[Object(n.jsx)(d.a,{item:!0,md:5,xs:12}),Object(n.jsx)(d.a,{item:!0,md:7,xs:12,className:"app-error",children:c.hausnummer&&"⚠ Eingabe erforderlich."})]}),Object(n.jsxs)(d.a,{container:!0,alignItems:"center",children:[Object(n.jsx)(d.a,{item:!0,md:5,xs:12,children:Object(n.jsxs)("label",{className:"app-label",children:["PLZ",Object(n.jsx)("sup",{className:"app-error",children:"*"}),"/ Ort",Object(n.jsx)("sup",{className:"app-error",children:"*"})]})}),Object(n.jsx)("input",{className:"app-input app-plz",id:"app-plz",ref:t({required:!0}),name:"plzSection2"}),Object(n.jsx)("input",{className:"app-input app-ort",ref:t({required:!0}),name:"ortSection2"})]}),Object(n.jsxs)(d.a,{container:!0,className:"app-errorContainer",children:[Object(n.jsx)(d.a,{item:!0,md:5,xs:12}),Object(n.jsx)(d.a,{item:!0,md:7,xs:12,className:"app-error",children:c.plzSection2&&"⚠ Eingabe erforderlich."})]}),Object(n.jsxs)(d.a,{container:!0,className:"app-errorContainer",children:[Object(n.jsx)(d.a,{item:!0,md:5,xs:12}),Object(n.jsx)(d.a,{item:!0,md:7,xs:12,className:"app-error",children:c.ortSection2&&"⚠ Eingabe erforderlich."})]}),Object(n.jsxs)(d.a,{container:!0,alignItems:"center",id:"app-familienstand",children:[Object(n.jsx)(d.a,{item:!0,md:5,xs:12,children:Object(n.jsx)("label",{className:"app-label",children:"Familienstand"})}),Object(n.jsx)(d.a,{item:!0,md:7,xs:12,children:Object(n.jsxs)("select",{className:"app-input",ref:t,name:"familienstand",style:{width:"250px"},children:[Object(n.jsx)("option",{value:"Bitte Wahlen",children:"Bitte wählen"}),Object(n.jsx)("option",{value:"Ledig",children:"Ledig"}),Object(n.jsx)("option",{value:"Verheiratet",children:"Verheirated"}),Object(n.jsx)("option",{value:"Eingetragene Lebensgemeinschaft",children:"Eingetragene Lebensgemeinschaft"}),Object(n.jsx)("option",{value:"Geschieden",children:"Geschieden"}),Object(n.jsx)("option",{value:"Verwitwet",children:"Verwitwet"})]})})]}),Object(n.jsxs)(d.a,{container:!0,alignItems:"center",children:[Object(n.jsx)(d.a,{item:!0,md:5,xs:12,children:Object(n.jsxs)("label",{className:"app-label",children:["Staatsangehorigkeit",Object(n.jsx)("sup",{className:"app-error",children:"*"})]})}),Object(n.jsx)(d.a,{item:!0,md:7,xs:12,children:Object(n.jsxs)("select",{className:"app-input",ref:t({required:!0,validate:function(e){return O(e)}}),name:"staatsangehörigkeit",style:{width:"250px"},children:[Object(n.jsx)("option",{value:"Bitte Wahlen",children:"Bitte wählen"}),Object(n.jsx)("option",{value:"option1",children:"Deutschland"}),Object(n.jsx)("option",{value:"anderer EU-Mitgliedsstaat",children:"anderer EU-Mitgliedsstaat"}),Object(n.jsx)("option",{value:"Sonstige",children:"Sonstige"})]})})]}),Object(n.jsxs)(d.a,{container:!0,className:"app-errorContainer",children:[Object(n.jsx)(d.a,{item:!0,md:5,xs:12}),Object(n.jsx)(d.a,{item:!0,md:7,xs:12,className:"app-error",children:c.staatsangehorigkeit&&"⚠ Bitte auswählen."})]}),Object(n.jsxs)(d.a,{container:!0,alignItems:"center",children:[Object(n.jsx)(d.a,{item:!0,md:5,xs:12,children:Object(n.jsxs)("label",{className:"app-label",children:["Beschäftigungsverhaltnis",Object(n.jsx)("sup",{className:"app-error",children:"*"})]})}),Object(n.jsx)(d.a,{item:!0,md:7,xs:12,children:Object(n.jsxs)("select",{className:"app-input",ref:t({required:!0,validate:function(e){return O(e)}}),name:"beschaftigungsverhaltnis",style:{width:"250px"},children:[Object(n.jsx)("option",{value:"Bitte wählen",children:"Bitte wählen"}),Object(n.jsx)("option",{value:"Selbstständig",children:"Selbstständig"}),Object(n.jsx)("option",{value:"Angestellt",children:"Angestellt"}),Object(n.jsx)("option",{value:"Sonstiges",children:"Sonstiges"})]})})]}),Object(n.jsxs)(d.a,{container:!0,className:"app-errorContainer",children:[Object(n.jsx)(d.a,{item:!0,md:5,xs:12}),Object(n.jsx)(d.a,{item:!0,md:7,xs:12,className:"app-error",children:c.beschaftigungsverhaltnis&&"⚠ Bitte auswählen."})]}),Object(n.jsxs)(d.a,{container:!0,alignItems:"center",children:[Object(n.jsx)(d.a,{item:!0,md:5,xs:12,children:Object(n.jsxs)("label",{className:"app-label",children:["Nettoeinkommen / Monat",Object(n.jsx)("sup",{className:"app-error",children:"*"})]})}),Object(n.jsxs)(d.a,{item:!0,md:7,xs:12,children:[Object(n.jsx)("input",{className:"app-input app-euroInputs",id:"app-nettoeinkommenMonat",ref:t({required:!0}),name:"nettoeinkommenMonat",type:"number",style:{width:"250px"}}),Object(n.jsx)("span",{className:"app-euro",children:"€"})]})]}),Object(n.jsxs)(d.a,{container:!0,className:"app-errorContainer",children:[Object(n.jsx)(d.a,{item:!0,md:5,xs:12}),Object(n.jsx)(d.a,{item:!0,md:7,xs:12,className:"app-error",children:c.nettoeinkommenMonat&&"⚠ Eingabe erforderlich."})]}),Object(n.jsx)(b.a,{variant:"subtitle1",className:"app-title2",children:Object(n.jsx)("b",{children:"Kontaktdaten"})}),Object(n.jsxs)(d.a,{container:!0,alignItems:"center",children:[Object(n.jsx)(d.a,{item:!0,md:5,xs:12,children:Object(n.jsxs)("label",{className:"app-label",children:["Telefon tagsüber",Object(n.jsx)("sup",{className:"app-error",children:"*"})]})}),Object(n.jsx)("input",{className:"app-input app-telefon1",ref:t({required:!0}),name:"telefonTagsuber1",type:"number",style:{width:"250px"}})]}),Object(n.jsxs)(d.a,{container:!0,className:"app-errorContainer",children:[Object(n.jsx)(d.a,{item:!0,md:5,xs:12}),Object(n.jsx)(d.a,{item:!0,md:7,xs:12,className:"app-error",children:c.telefonTagsuber1&&"⚠ Eingabe erforderlich."})]}),Object(n.jsxs)(d.a,{container:!0,alignItems:"center",children:[Object(n.jsx)(d.a,{item:!0,md:5,xs:12,children:Object(n.jsx)("label",{className:"app-label",children:"Telefon mobil"})}),Object(n.jsx)("input",{className:"app-input app-telefon1",ref:t,name:"telefonMobil1",type:"number",style:{width:"250px"}})]}),Object(n.jsxs)(d.a,{container:!0,alignItems:"center",id:"app-erreichbarkeit",children:[Object(n.jsx)(d.a,{item:!0,md:5,xs:12,children:Object(n.jsx)("label",{className:"app-label",children:"Erreichbarkeit"})}),Object(n.jsx)(d.a,{item:!0,md:7,xs:12,children:Object(n.jsxs)("select",{className:"app-input",ref:t,name:"erreichbarkeit",style:{width:"250px"},children:[Object(n.jsx)("option",{value:"Bitte Wahlen",children:"Bitte Wahlen"}),Object(n.jsx)("option",{value:"08:00 - 10:00 Uhr",children:"08:00 - 10:00 Uhr"}),Object(n.jsx)("option",{value:"10:00 - 12:00 Uhr",children:"10:00 - 12:00 Uhr"}),Object(n.jsx)("option",{value:"12:00 - 14:00 Uhr",children:"12:00 - 14:00 Uhr"}),Object(n.jsx)("option",{value:"14:00 - 16:00 Uhr",children:"14:00 - 16:00 Uhr"}),Object(n.jsx)("option",{value:"16:00 - 18:00 Uhr",children:"16:00 - 18:00 Uhr"}),Object(n.jsx)("option",{value:"18:00 - 20:00 Uhr",children:"18:00 - 20:00 Uhr"})]})})]}),Object(n.jsxs)(d.a,{container:!0,alignItems:"center",children:[Object(n.jsx)(d.a,{item:!0,md:5,xs:12,children:Object(n.jsxs)("label",{className:"app-label",children:["E-Mail",Object(n.jsx)("sup",{className:"app-error",children:"*"})]})}),Object(n.jsx)(d.a,{item:!0,md:7,xs:12,children:Object(n.jsx)("input",{className:"app-input",id:"app-email",ref:t({required:!0,validate:function(e){return u.validate(e)}}),name:"email",style:{width:"250px"}})})]}),Object(n.jsxs)(d.a,{container:!0,className:"app-errorContainer",children:[Object(n.jsx)(d.a,{item:!0,md:5,xs:12}),Object(n.jsx)(d.a,{item:!0,md:7,xs:12,className:"app-error",children:c.email&&"⚠ Eingabe bitte überprüfen"})]}),Object(n.jsxs)(d.a,{container:!0,className:"app-checkboxContainer",children:[Object(n.jsx)("input",{className:"app-input",ref:t,name:"checkbox",type:"checkbox",style:{marginBottom:"3px",width:"auto"}}),Object(n.jsx)("label",{className:"app-label app-checkbox",children:"Ich stelle den Antrag mit einer weiteren Person"})]}),Object(n.jsxs)("div",{className:"app-buttonContainer",children:[Object(n.jsx)(m.a,{className:"app-button app-backButton",onClick:function(){e.setSectionCallback(1)},children:"Zurück"}),Object(n.jsx)(m.a,{type:"submit",className:"app-button app-nextButton",children:"Weiter"})]})]})}var f=t(5),v=t.n(f),k=t(12);function w(e){var a=Object(o.a)(),t=a.register,s=a.handleSubmit,c=a.errors,r=function(){var a=Object(k.a)(v.a.mark((function a(t){return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("/.netlify/functions/contentful",{method:"POST",body:JSON.stringify(Object(l.a)(Object(l.a)({},e.formData),t))}).then((function(){e.setSectionCallback(4)})).catch((function(){e.setSectionCallback(4)}));case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return Object(n.jsxs)("form",{className:"app-form",onSubmit:s(r),children:[Object(n.jsxs)(d.a,{container:!0,alignItems:"center",className:"app-headerContainer",children:[Object(n.jsx)(d.a,{item:!0,md:6,xs:12,children:Object(n.jsx)(b.a,{variant:"subtitle1",className:"app-title1",children:Object(n.jsx)("b",{children:"Anfrage abschicken"})})}),Object(n.jsx)(d.a,{item:!0,md:6,xs:12,style:{marginBottom:"16px"},children:Object(n.jsx)(b.a,{variant:"body2",className:"app-step",children:"Schritt 3/3"})})]}),Object(n.jsx)(b.a,{children:"Falls Sie bereits Kontakt zu uns hatten, geben Sie bitte den Beraternamen hier an."}),Object(n.jsxs)(d.a,{container:!0,alignItems:"center",style:{margin:"16px 0"},children:[Object(n.jsx)(d.a,{item:!0,md:12,xs:12,children:Object(n.jsx)("label",{className:"app-label",children:"Optional: Wunschberater angeben"})}),Object(n.jsx)("input",{className:"app-input",ref:t,name:"wunschberaterWahlen"})]}),Object(n.jsxs)(d.a,{container:!0,alignItems:"center",children:[Object(n.jsx)(d.a,{item:!0,md:12,xs:12,children:Object(n.jsx)("label",{className:"app-label",children:"Ihre Mitteilung an uns:"})}),Object(n.jsx)("textarea",{className:"app-input",ref:t,rows:"6",cols:"30",name:"mitteilung "})]}),Object(n.jsxs)(b.a,{children:[Object(n.jsx)("p",{children:" 🔒 Ihre Angaben werden SSL-verschlüsselte übermittelt."}),Object(n.jsx)("p",{children:" 📎 Es werden unverbindliche Konditionsangebote angefragt."}),Object(n.jsx)("p",{children:" 🌍 Wir vergleichen über 400 Kapitalgeber."})]}),Object(n.jsxs)(d.a,{container:!0,className:"app-checkboxContainer",children:[Object(n.jsx)("input",{className:"app-input",ref:t({required:!0}),name:"checkbox2",type:"checkbox",style:{marginBottom:"3px",width:"auto"}}),Object(n.jsxs)("label",{className:"app-label app-checkbox",children:["Ich bin mit den AGB einverstanden und habe die Datenschutzhinweise zur Kenntnis genommen.",Object(n.jsx)("sup",{style:{color:"red"},children:"*"})]})]}),Object(n.jsx)("div",{className:"app-errorContainer",children:Object(n.jsx)("span",{className:"app-error",children:c.checkbox2&&"⚠ Zustimmung erforderlich"})}),Object(n.jsxs)(d.a,{container:!0,className:"app-checkboxContainer",children:[Object(n.jsx)("input",{className:"app-input",ref:t,name:"checkbox3",type:"checkbox",style:{marginBottom:"3px",width:"auto"}}),Object(n.jsx)("label",{className:"app-label app-checkbox",children:"Ich möchte den Newsletter abonnieren und bin damit einverstanden, dass meine Daten für diesen Zweck gespeichert werden."})]}),Object(n.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(n.jsx)(m.a,{className:"app-button app-backButton",onClick:function(){e.setSectionCallback(2)},children:"Zurück"}),Object(n.jsx)(m.a,{type:"submit",className:"app-button app-nextButton",children:"Absenden"})]})]})}function C(){return Object(n.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",borderRadius:"16px",padding:"64px"},children:[Object(n.jsx)(b.a,{children:Object(n.jsx)("b",{children:"Vielen Danke für Ihre Anfrage."})}),Object(n.jsxs)(b.a,{children:[Object(n.jsx)("p",{children:"Sehr geehrte Kundin, sehr geehrter Kunde,"}),"wir freuen uns, dass Sie sich für eine Baufinanzierung mit uns interessieren und sich Zeit zum Ausfüllen der Finanzierungsanfrage genommen haben.",Object(n.jsx)("br",{}),Object(n.jsx)("p",{children:"Wie geht es jetzt weiter?"})]}),Object(n.jsx)(b.a,{children:Object(n.jsxs)("ol",{children:[Object(n.jsx)("li",{children:"Wir melden uns bei Ihnen und besprechen gemeinsam Ihr Vorhaben, Ihre Wünsche und Ihre Lebenssituation."}),Object(n.jsx)("li",{children:"Aus über 400 Bankpartnern finden wir die passende Finanzierungslösung."}),Object(n.jsx)("li",{children:"Bei Zustimmung können Sie den Finanzierungsvorschlag unterschreiben. Ihr Darlehen wird beantragt."})]})})]})}i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)((function(){var e=Object(s.useState)(1),a=Object(j.a)(e,2),t=a[0],c=a[1],r=Object(s.useState)({}),i=Object(j.a)(r,2),d=i[0],b=i[1],m=function(e){c(e)},o=function(e){b(Object(l.a)(Object(l.a)({},d),e))},h={minWidth:160,paddingLeft:8,paddingRight:8};return h.minWidth=50,h.paddingLeft=0,h.paddingRight=0,h.letterSpacing="0.1em",Object(n.jsxs)("div",{className:"app-root",children:[Object(n.jsxs)("div",{className:"app-tabsContainer",children:[Object(n.jsx)("p",{className:"app-tab ".concat(t>0?"app-tabActive":null),children:"Finanzierung"}),Object(n.jsx)("p",{className:"app-tab ".concat(t>1?"app-tabActive":null),children:"Kontakt"}),Object(n.jsx)("p",{className:"app-tab ".concat(t>2?"app-tabActive":null),children:"Absenden"})]}),Object(n.jsx)(p.a,{variant:"determinate",className:"app-progressBar",value:25*t}),Object(n.jsx)("div",{className:"app-container",children:function(){switch(t){case 1:return Object(n.jsx)(x,{setSectionCallback:m,setDataCallback:o});case 2:return Object(n.jsx)(N,{setSectionCallback:m,setDataCallback:o});case 3:return Object(n.jsx)(w,{setSectionCallback:m,setDataCallback:o,formData:d});case 4:return Object(n.jsx)(C,{});default:return null}}()})]})}),{})}),document.getElementById("root")),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,70)).then((function(a){var t=a.getCLS,n=a.getFID,s=a.getFCP,c=a.getLCP,r=a.getTTFB;t(e),n(e),s(e),c(e),r(e)}))}()}},[[48,1,2]]]);