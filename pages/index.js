import Head from 'next/head'
import Reports from './reports';
import 'isomorphic-fetch'

const Home = (props) => (
  <div className="container">
    <Head>
      <title>Reportes MVP</title>
      <link rel="icon" href="/favicon.ico" />
      <script src="//unpkg.com/sunburst-chart" />
    </Head>

    <main>
      <Reports challenges={{
   "reports":[
      {
         "title":"General Report MLA - 5th Week",
         "description":"Fifth complete MLA report",
         "tags":[
            "MLA","General","5w"
         ],
         "start_date":"21-02-2020",
         "end_date":"27-02-2020",
         "highlights_url":"https://rester-app-hosting.firebaseapp.com/report-28-2-MLA/highlights.csv",
         "challenges_url":"https://rester-app-hosting.firebaseapp.com/report-28-2-MLA/kyc_nodes.csv",
         "sunburst_url":"https://rester-app-hosting.firebaseapp.com/report-28-2-MLA/sunburst.json"
      },
      {
         "title":"General Report MLB - 5th Week",
         "description":"Fifth complete MLB report",
         "tags":[
            "MLB","General","5w"
         ],
         "start_date":"21-02-2020",
         "end_date":"27-02-2020",
         "highlights_url":"https://rester-app-hosting.firebaseapp.com/report-28-2-MLB/highlights.csv",
         "challenges_url":"https://rester-app-hosting.firebaseapp.com/report-28-2-MLB/kyc_nodes.csv",
         "sunburst_url":"https://rester-app-hosting.firebaseapp.com/report-28-2-MLB/sunburst.json"
      },
      {
         "title":"AFIP CVU Report - 5th Week",
         "description":"Fifth week report",
         "tags":[
            "afip","5w"
         ],
         "start_date":"21-02-2020",
         "end_date":"27-02-2020",
         "highlights_url":"https://rester-app-hosting.firebaseapp.com/report-28-2-AFIPCVU/highlights.csv",
         "challenges_url":"https://rester-app-hosting.firebaseapp.com/report-28-2-AFIPCVU/kyc_nodes.csv",
         "sunburst_url":"https://rester-app-hosting.firebaseapp.com/report-28-2-AFIPCVU/sunburst.json"
      },
      {
         "title":"iOS Report - 5th Week",
         "description":"Fifth week report, native compliant issues yet to be resolved",
         "tags":[
            "iOS","5w"
         ],
         "start_date":"21-02-2020",
         "end_date":"27-02-2020",
         "highlights_url":"https://rester-app-hosting.firebaseapp.com/report-28-2-ios/highlights.csv",
         "challenges_url":"https://rester-app-hosting.firebaseapp.com/report-28-2-ios/kyc_nodes.csv",
         "sunburst_url":"https://rester-app-hosting.firebaseapp.com/report-28-2-ios/sunburst.json"
      },
      {
         "title":"Android Report - 5th Week",
         "description":"Fifth week report on android",
         "tags":[
            "Android","5w"
         ],
         "start_date":"21-02-2020",
         "end_date":"27-02-2020",
         "highlights_url":"https://rester-app-hosting.firebaseapp.com/report-28-2-android/highlights.csv",
         "challenges_url":"https://rester-app-hosting.firebaseapp.com/report-28-2-android/kyc_nodes.csv",
         "sunburst_url":"https://rester-app-hosting.firebaseapp.com/report-28-2-android/sunburst.json"
      },
      {
         "title":"Web mobile Report - 5th Week",
         "description":"Fifth week report on web mobile",
         "tags":[
            "Web-mobile","5w"
         ],
         "start_date":"21-02-2020",
         "end_date":"27-02-2020",
         "highlights_url":"https://rester-app-hosting.firebaseapp.com/report-28-2-webmobile/highlights.csv",
         "challenges_url":"https://rester-app-hosting.firebaseapp.com/report-28-2-webmobile/kyc_nodes.csv",
         "sunburst_url":"https://rester-app-hosting.firebaseapp.com/report-28-2-webmobile/sunburst.json"
      },
      {
         "title":"Web desktop Report - 5th Week",
         "description":"Fifth week report on desktop",
         "tags":[
            "Desktop","5w"
         ],
         "start_date":"21-02-2020",
         "end_date":"27-02-2020",
         "highlights_url":"https://rester-app-hosting.firebaseapp.com/report-28-2-desktop/highlights.csv",
         "challenges_url":"https://rester-app-hosting.firebaseapp.com/report-28-2-desktop/kyc_nodes.csv",
         "sunburst_url":"https://rester-app-hosting.firebaseapp.com/report-28-2-desktop/sunburst.json"
      },
      {
         "title":"User Blocker Report - First Day",
         "description":"First 24 hours of dismissable afip regulation",
         "tags":[
            "MLA", "User Blocker"
         ],
         "start_date":"25-02-2020",
         "end_date":"27-02-2020",
         "highlights_url":"https://rester-app-hosting.firebaseapp.com/report-27-2-AFIP/highlights.csv",
         "challenges_url":"https://rester-app-hosting.firebaseapp.com/report-27-2-AFIP/kyc_nodes.csv",
         "sunburst_url":"https://rester-app-hosting.firebaseapp.com/report-27-2-AFIP/sunburst.json"
      },
      {
         "title":"User Blocker Report - First 3 hours",
         "description":"First 3 hours of dismissable afip regulation",
         "tags":[
            "MLA", "User Blocker"
         ],
         "start_date":"25-02-2020",
         "end_date":"26-02-2020",
         "highlights_url":"https://rester-app-hosting.firebaseapp.com/report-26-2-AFIP/highlights.csv",
         "challenges_url":"https://rester-app-hosting.firebaseapp.com/report-26-2-AFIP/kyc_nodes.csv",
         "sunburst_url":"https://rester-app-hosting.firebaseapp.com/report-26-2-AFIP/sunburst.json"
      },
      {
         "title":"General Report MLA - 4rd Week",
         "description":"Second complete MLA report",
         "tags":[
            "MLA","General","4w"
         ],
         "start_date":"15-02-2020",
         "end_date":"20-02-2020",
         "highlights_url":"https://rester-app-hosting.firebaseapp.com/report-21-2-MLA/highlights.csv",
         "challenges_url":"https://rester-app-hosting.firebaseapp.com/report-21-2-MLA/kyc_nodes.csv",
         "sunburst_url":"https://rester-app-hosting.firebaseapp.com/report-21-2-MLA/sunburst.json"
      },
      {
         "title":"General Report MLB - 4rd Week",
         "description":"Second complete MLB report",
         "tags":[
            "MLB","General","4w"
         ],
         "start_date":"15-02-2020",
         "end_date":"20-02-2020",
         "highlights_url":"https://rester-app-hosting.firebaseapp.com/report-21-2-MLB/highlights.csv",
         "challenges_url":"https://rester-app-hosting.firebaseapp.com/report-21-2-MLB/kyc_nodes.csv",
         "sunburst_url":"https://rester-app-hosting.firebaseapp.com/report-21-2-MLB/sunburst.json"
      },
      {
         "title":"General Report MLA - 3rd Week",
         "description":"First complete MLA report ever",
         "tags":[
            "MLA","General","3w"
         ],
         "start_date":"07-02-2020",
         "end_date":"14-02-2020",
         "highlights_url":"https://rester-app-hosting.firebaseapp.com/sample-report-14-2-MLA/highlights.csv",
         "challenges_url":"https://rester-app-hosting.firebaseapp.com/sample-report-14-2-MLA/kyc_nodes.csv",
         "graph_image_url":"https://rester-app-hosting.firebaseapp.com/sample-report-14-2-MLA/graph_image.png"
      },
      {
         "title":"General Report MLB - 3rd Week",
         "description":"First complete MLB report ever",
         "tags":[
            "MLB","General","3w"
         ],
         "start_date":"07-02-2020",
         "end_date":"14-02-2020",
         "highlights_url":"https://rester-app-hosting.firebaseapp.com/sample-report-14-2-MLB/highlights.csv",
         "challenges_url":"https://rester-app-hosting.firebaseapp.com/sample-report-14-2-MLB/kyc_nodes.csv",
         "graph_image_url":"https://rester-app-hosting.firebaseapp.com/sample-report-14-2-MLB/graph_image.png"
      },
            {
         "title":"Report MLA iOS - 3rd Week",
         "description":"On this version native compliant nodes are missing because of broken implementation.",
         "tags":[
            "MLA",
            "iOS"
         ],
         "start_date":"07-02-2020",
         "end_date":"14-02-2020",
         "highlights_url":"https://rester-app-hosting.firebaseapp.com/sample-report-14-2-MLA-IOS/highlights.csv",
         "challenges_url":"https://rester-app-hosting.firebaseapp.com/sample-report-14-2-MLA-IOS/kyc_nodes.csv"
      },
            {
         "title":"Report MLA Android - 3rd Week",
         "description":"Android has the highest share of all platforms and has no identified issues for this version.",
         "tags":[
            "MLA",
            "Android"
         ],
         "start_date":"07-02-2020",
         "end_date":"14-02-2020",
         "highlights_url":"https://rester-app-hosting.firebaseapp.com/sample-report-14-2-MLA-AND/highlights.csv",
         "challenges_url":"https://rester-app-hosting.firebaseapp.com/sample-report-14-2-MLA-AND/kyc_nodes.csv"
      }
   ],
   "flows":[
      {
         "title":"Full",
         "description":"Flujo completo con todos los challenges soportados",
         "mock":"flow-full",
         "label":"flow-mex",
         "sites":[
            "MLA",
            "MLB",
            "MLM"
         ]
      },
      {
         "title":"Asset Management Mexico Lite",
         "description":"Flujo de asset management en mexico lite",
         "mock":"flow-mex",
         "label":"flow-mex",
         "sites":[
            "MLM"
         ]
      },
      {
         "title":"Asset Management Mexico Full",
         "description":"Flujo de asset management en mexico full",
         "mock":"flow-mex-full",
         "label":"flow-mex",
         "sites":[
            "MLM"
         ]
      },
      {
         "title":"Asset Management Mexico IV",
         "description":"Flujo de asset management en mexico con IV",
         "mock":"flow-mex-iv",
         "label":"flow-mex",
         "sites":[
            "MLM"
         ]
      }
   ],
   "challenges":[
      {
         "title":"CURP",
         "description":"Nuevo challenge de méxico para CURP",
         "mock":"case999",
         "type":"blocker",
         "label":"user_curp",
         "sites":[
            "MLA",
            "MLB",
            "MLM"
         ],
         "design_type":"new"
      },
      {
         "title":"Identity Validation - Documentación",
         "description":"Llama a identity validation (debes tener IV integrado)",
         "mock":"case6",
         "type":"iv",
         "label":"user_documentation",
         "sites":[
            "MLA",
            "MLB",
            "MLM"
         ],
         "design_type":"highlighted"
      },
      {
         "title":"Identity Validation - Prueba de vida (POL)",
         "description":"Solicita la selfie para un usuario",
         "mock":"case21",
         "type":"iv_selfie",
         "label":"user_proof_of_life",
         "sites":[
            "MLA",
            "MLB",
            "MLM"
         ],
         "design_type":"highlighted"
      },
      {
         "title":"Usuario menor de edad",
         "description":"El documento corresponde a una persona menor de edad",
         "mock":"case99",
         "label":"user_underage",
         "sites":[
            "MLA"
         ],
         "design_type":"highlighted"
      },
      {
         "title":"Usuario bloqueado",
         "description":"Usuario en un bloqueo, validando información",
         "mock":"case44",
         "type":"iv",
         "label":"user_blocked",
         "sites":[
            "MLA"
         ],
         "design_type":"highlighted"
      },
      {
         "title":"Mala calidad en el documento",
         "description":"Muestra una pantalla para indicarle al usuario que el documento que subio es de mala calidad",
         "mock":"case16",
         "type":"blocker",
         "label":"user_documentation_bad_quality",
         "sites":[
            "MLA"
         ],
         "design_type":"highlighted"
      },
      {
         "title":"Confirmación de identificación",
         "mock":"case19",
         "type":"blocker",
         "description":"Documento no coincide con el de tu cuenta",
         "label":"user_identifier_confirmation",
         "sites":[
            "MLA",
            "MLB",
            "MLM"
         ],
         "design_type":"highlighted"
      },
      {
         "title":"Identity Takeover",
         "mock":"case24",
         "description":"Estamos verificando los datos",
         "type":"blocker",
         "label":"user_identity_takeover",
         "sites":[
            "MLA",
            "MLB",
            "MLM"
         ],
         "design_type":"highlighted"
      },
      {
         "title":"Registro de actividad",
         "description":"Muestra un listado de actividades continuas",
         "mock":"case17",
         "type":"list",
         "label":"user_activities",
         "sites":[
            "MLA",
            "MLB",
            "MLM"
         ]
      },
      {
         "title":"Identificación manual",
         "description":"Identificar si el usuario es persona Física o Jurídica",
         "mock":"case7",
         "type":"option",
         "label":"user_identifier",
         "sites":[
            "MLA",
            "MLB",
            "MLM"
         ]
      },
      {
         "title":"Usuario inconsistente",
         "description":"Pantalla de error de validacion de iv",
         "mock":"case8",
         "type":"blocker",
         "label":"user_inconsistency",
         "sites":[
            "MLA",
            "MLB"
         ]
      },
      {
         "title":"Fecha de Nacimiento",
         "description":"El usuario declara su fecha de nacimiento",
         "mock":"case9",
         "type":"input_form",
         "label":"user_birthdate",
         "sites":[
            "MLA",
            "MLB",
            "MLM"
         ]
      },
      {
         "title":"Genero",
         "description":"Les ofrece a los usuario la posibilidad de elegir se genero",
         "mock":"case10",
         "type":"option",
         "label":"user_gender",
         "sites":[
            "MLA",
            "MLB",
            "MLM"
         ]
      },
      {
         "title":"Terminos y condiciones",
         "description":"Muestra una pantalla para aceptar ciertos terminos y condiciones",
         "mock":"case15",
         "type":"tyc",
         "label":"user_representative_identifier",
         "sites":[
            "MLA",
            "MLB",
            "MLM"
         ]
      },
      {
         "title":"Lugar de Nacimiento",
         "mock":"case18",
         "description":"Declaración de la ciudad/barrio donde nació el usuario",
         "type":"input_form",
         "label":"user_place_of_birth",
         "sites":[
            "MLA",
            "MLB",
            "MLM"
         ]
      },
      {
         "title":"Nacionalidad",
         "description":"Declaración de la nacionalidad del usuario",
         "mock":"case11",
         "type":"list",
         "label":"user_nationality",
         "sites":[
            "MLA",
            "MLB",
            "MLM"
         ]
      },
      {
         "title":"Mala calidad de la selfie",
         "description":"Le muestra al usuario un mensaje avisando que la foto que subio no tiene muy buena definicion",
         "mock":"case22",
         "type":"blocker",
         "label":"user_proof_of_life_bad_quality",
         "sites":[
            "MLA",
            "MLB",
            "MLM"
         ]
      },
      {
         "title":"Nombre de Padres",
         "description":"Challenge que permite al usuario declarar los nombres de los padres",
         "mock":"case14",
         "type":"input_form",
         "label":"user_parental_name",
         "sites":[
            "MLA",
            "MLB",
            "MLM"
         ]
      },
      {
         "title":"Identificacion",
         "description":"Un caso mas de identificacion de usuario",
         "mock":"case20",
         "label":"user_documentation_expired",
         "sites":[
            "MLA",
            "MLB",
            "MLM"
         ]
      },
      {
         "title":"Proof of Address",
         "mock":"case27",
         "description":"Prueba de direccion",
         "type":"iv",
         "label":"user_proof_home_address",
         "sites":[
            "MLM"
         ]
      },
      {
         "title":"Document mismatch",
         "mock":"case32",
         "type":"blocker",
         "description":"No pudimos validar tu identidad con el de tu cuenta",
         "label":"user_proof_of_life_mismatch",
         "sites":[
            "MLA",
            "MLB",
            "MLM"
         ]
      },
      {
         "title":"Ocupacion",
         "description":"Declaración de la ocupación del usuario a partir de un listado",
         "mock":"case35",
         "type":"list",
         "label":"user_occupation",
         "sites":[
            "MLA"
         ]
      },
      {
         "title":"Estado civil",
         "description":"Declaración del estado civil",
         "mock":"case36",
         "type":"list",
         "label":"user_marital_status",
         "sites":[
            "MLA"
         ]
      },
      {
         "title":"Teléfono",
         "description":"Pedido del número de teléfono del usuario",
         "mock":"case40",
         "type":"iv",
         "label":"user_phone",
         "sites":[
            "MLA"
         ]
      },
      {
         "title":"Formulario de direccion horizontal",
         "description":"Formulario de ingreso manual, caso de prueba para address",
         "mock":"case41",
         "type":"input_form",
         "label":"user_home_address",
         "sites":[
            "MLA",
            "MLB"
         ]
      },
      {
         "title":"Formulario de direccion vertical",
         "description":"Formulario de ingreso manual, caso de prueba para address",
         "mock":"case42",
         "type":"blocker",
         "label":"user_home_address_mismatch",
         "sites":[
            "MLA",
            "MLB",
            "MLM"
         ]
      },
      {
         "title":"Confirmacion de direccion",
         "description":"Le muestra al usuario una pantalla para aceptar que la direccion es correcta",
         "mock":"case43",
         "label":"user_company_address",
         "sites":[
            "MLA",
            "MLB",
            "MLM"
         ]
      },
      {
         "title":"Declaración del nombre",
         "mock":"case59",
         "description":"Cual es tu nombre y apellido",
         "type":"input_form",
         "label":"user_home",
         "sites":[
            "MLA",
            "MLB",
            "MLM"
         ]
      },
      {
         "title":"No hay coincidencia en el nombre",
         "description":"Muestra un mensaje informando que el nombre escrito no coincide con el del documento",
         "mock":"case60",
         "type":"blocker",
         "label":"user_name_mismatch",
         "sites":[
            "MLB"
         ]
      },
      {
         "title":"Nombre de compañia mismatch",
         "mock":"case61",
         "description":"El nombre de tu compañia no coincide con el de tu cuenta",
         "type":"blocker",
         "label":"user_company_name_mismatch",
         "sites":[
            "MLA",
            "MLB",
            "MLM"
         ]
      },
      {
         "title":"User legal entity documentation",
         "mock":"case62",
         "description":"Continuar desde tu computadora",
         "type":"blocker",
         "label":"user_legal_entity_documentation",
         "sites":[
            "MLA",
            "MLB",
            "MLM"
         ]
      },
      {
         "title":"User is seller",
         "description":"Vendedor",
         "mock":"case5",
         "type":"iv",
         "label":"user_is_seller",
         "sites":[
            "MLA",
            "MLB",
            "MLM"
         ]
      },
      {
         "title":"User is dead",
         "mock":"case70",
         "description":"El documento corresponde a una persona fallecida",
         "type":"blocker",
         "label":"user_is_dead",
         "sites":[
            "MLA",
            "MLB",
            "MLM"
         ],
         "design_type":"broken"
      },
      {
         "title":"Proof of Address - Bad Quality",
         "mock":"case28",
         "description":"Mala calidad en la prueba de direccion",
         "type":"blocker",
         "label":"user_proof_home_address_bad_quality",
         "sites":[
            "MLM"
         ],
         "design_type":"broken"
      },
      {
         "title":"Mismatch Birthday",
         "mock":"case29",
         "type":"blocker",
         "description":"No hay coincidencia de fecha de nacimiento",
         "label":"user_birthdate_mismatch",
         "sites":[
            "MLA",
            "MLB",
            "MLM"
         ],
         "design_type":"broken"
      },
      {
         "title":"Proof of life Unknown",
         "description":"El usuario es menor de edad",
         "mock":"case23",
         "type":"blocker",
         "label":"user_proof_of_life_unknown",
         "sites":[
            "MLA",
            "MLB",
            "MLM"
         ],
         "design_type":"broken"
      }
   ]
}}/>
    </main>

    <style jsx>{`

    `}</style>

    <style jsx global>{`
      html,
      body {
        height: 100vh;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      html {
        background: rgba(150,150,150,.05);
      }

      body {
        padding: 32px;
      }

      * {
        box-sizing: border-box;
      }


      .reports {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(160px, 160px));
        grid-gap: 32px;
      }

      .report-card {
        width: 160px;
        height: 160px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        background: white;
        border-radius: 8px;
        padding: 8px;
        font-weight: bold;
        cursor: pointer;
        transition: .5s box-shadow ease;

        display: flex;
        flex-flow: column;
        justify-content: space-around;
      }

      .report-card:hover {
        box-shadow: 1px 1px 4px rgba(0,0,0,.2);
        transition: .5s box-shadow ease;
      }

      .tags {
        display: flex;
        align-items: center;
        width: 90%;
        justify-content: space-around;
      }

      .tag {
        background: lightgray;
        width: 16px;
        height: 16px;
        min-width: 0;
        min-height: 0;
        border-radius: 8px;
      }

      .main-header {
        display: flex;
        margin-bottom: 32px;
      }

      .maintags {
        display: flex;
        justify-content: space-between;
        flex-flow: row wrap;
        align-items: flex-start;
        max-width: 450px;
        height: 48px;
        margin-left: 32px;
      }

      .maintag {
        width: auto;
        padding: 0 8px;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: lightgray;
        opacity: .3;
        transition: .2s ease opacity;
        cursor: pointer;
      }

      .maintag.active {
        opacity: 1;
        transition: .2s ease opacity;
      }

      .dates {
        color: gray;
        font-weight: normal;
      }

      .MLA {
        background: lightskyblue;
      }

      .UserBlocker {
        background: palevioletred;
      }

      .MLB {
        background: lightgreen;
      }

      .iOS {
        background: lightgray;
      }

      .Android {
        background: springgreen;
      }

      .General {
        background: #fff159;
      }

      .Desktop, .Web-mobile {
        background: #16F4D0;
      }


      .tabs {
        width: 100vw;
        background: white;
        position: absolute;
        left: 238px;
        top: 0px;
        padding: 32px 40px 40px;
        left: 100%;
        transition: 1s ease left;
        overflow-y: scroll;
        height: 100vh;
      }
      .tabs.active {
        animation: in 1s ease forwards;
      }

      @keyframes in {
        from {
          left: 100%;
        }
        to {
          left: 0px;
        }
      }

      @keyframes out {
        from {
          left: 238px;
        }
        to {
          left: 100%;
        }
      }

      .line {
        display: flex;
      }

      .line:nth-child(odd) {
        background: #f6f8fa;
      }

      .line.header {
        font-weight: bold;
        margin-top: 24px;
        background: lightgray;
      }

      .line.header .cell {
        height: 32px;
        font-size: 14px;
      }

      .cell {
        min-width: 170px;
        width: 170px;
        max-width: 170px;
        height: 40px;
        text-align: left;
        border: 1px solid #dfe2e5;
        padding-left: 8px;

        display: flex;
        justify-content: flex-start;
        align-items: center;

        border: 1px transparent solid;
        word-break: break-all;
        font-size: 14px;
      }



      .close-icon {
        margin-bottom: 16px;
      }

      table {
        margin: 0 auto;
      }

      .table-slider {
        overflow: scroll;
        height: 74vh;
      }

      .tabs-menu {
        display: flex;
        justify-content: center;
        position: relative;
        align-items: center;
      }

      .tab {
        overflow-x: scroll;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .search {
        width: 220px;
        border: none;
        margin-bottom: 0;
        height: 32px;
        padding-left: 16px;
        border-radius: 4px;
        font-size: 12px;
        outline: none;
      }

      .tab.chart {
        margin: 0 auto;
        transform: scale(.8) translateY(-48px);
        overflow: hidden;
      }

      .close-container{
        position: absolute;
        left: 0;
        cursor: pointer;
      }

      .menu {
        margin-right: 32px;
        font-size: 16px;
        font-weight: bold;
        color: #23435e;
        height: 32px;
        border: none;
        opacity: .5;
        padding: 0 32px;
        cursor: pointer;
        outline: none;
      }

      .menu.active {
        border-bottom: 1px solid #23435e;
        opacity: 1;
      }

      .graph-image {
        width: auto;
        height: 100%;
        max-height: 550px;
        margin: 32px auto;
      }

      .searchbox {
        width: 220px;
        background: white;
        height: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 32px;
        padding-right: 16px;
      }

      .path-label text-path {
        stroke-width: 3;
      }

      .sunburst-viz .slice path {
         cursor: pointer;
       }
       
       .sunburst-viz text {
         font-family: sans-serif;
         font-size: 12px;
         dominant-baseline: middle;
         text-anchor: middle;
         pointer-events: none;
         fill: #222;
       }
       
       .sunburst-viz text .text-contour {
         fill: none;
         stroke: white;
         stroke-width: 3;
         stroke-linejoin: 'round';
       }
       
       .sunburst-viz .main-arc {
         stroke: white;
         stroke-width: 1px;
         transition: opacity .4s;
       }
       
       .sunburst-viz .main-arc:hover {
         opacity: 0.85;
         transition: opacity .05s;
       }
       
       .sunburst-viz .hidden-arc {
         fill: none;
       }
       
       .sunburst-tooltip {
         display: none;
         position: absolute;
         min-width: 320px;
         width: fit-content;
         white-space: nowrap;
         padding: 5px;
         border-radius: 3px;
         font: 12px sans-serif;
         color: white;
         background: rgba(0,0,0,0.65);
         pointer-events: none;
       }
       
       .sunburst-tooltip .tooltip-title {
         font-weight: bold;
         text-align: center;
         margin-bottom: 5px;
       }

    `}</style>
  </div>
)

export default Home
