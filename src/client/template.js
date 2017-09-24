export default (html, state) => `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    
    <title>React App</title>
    <link rel="stylesheet" href="/css/font-icons/font-awesome/css/font-awesome.min.css">        
    <link rel="stylesheet" href="/css/bootstrap.min.css">        
    <link rel="stylesheet" href="/css/neon-core.min.css">
    <link rel="stylesheet" href="/css/neon-theme.min.css">
    <link rel="stylesheet" href="/css/neon-forms.min.css">
    <link rel="stylesheet" href="/css/skins/facebook.min.css">
    <style type="text/css">
      #tasks{
          position: relative;
          flex-grow: 1;
          webkit-box-flex: 1;
          height: 100%;
      }
  
      #canvas-board{
          user-select: none;
          white-space: nowrap;
          margin-bottom: 10px;
          overflow-x: auto;
          overflow-y: hidden;
          padding-bottom: 10px;
  
      }
  
      .column-board,.add-column{
          width: 270px;
          margin: 0px 5px;
          height: 100%;
          box-sizing: border-box;
          display: inline-block;
          vertical-align: top;
          white-space: nowrap;
  
      }
  
      .task-board{
          background: #f1f1f1;
          border-radius: 3px;
          box-sizing: border-box;
          display: flex;
          -webkit-flex-direction: column;
          -ms-flex-direction: column;
          flex-direction: column;
          max-height: 100%;
          position: relative;
          white-space: normal;
      }
      .sorted .panel{
          margin: 5px;
          cursor: pointer;
      }
  
      .sorted .panel .panel-body{
          padding-bottom: 0px;
          max-height: 130px;
          overflow: hidden;
      }
  
      .sorted .panel .panel-body p {
          font-weight: 600;
          color: black;
      }
  
      .draggable-portlets .sorted {
          min-height: 50px;
      }
  
      .task-board h4{
          margin-left: 15px;
          cursor: pointer;
      }
  
      .task-board .label{
          padding: 2px;
          text-transform: uppercase;
          height: 25px;
      }
  
      .footer-column a{
          font-weight: bold;
      }
  
      .add-column {
          font-weight: bold;
      }
  
      .task-footer img {
          margin: 5px;
      }
  
      #nomeQuadro:hover {
          background-color:#f1f1f1;
          cursor: pointer;
      }
  
      #descricaoQuadro:hover {
          background-color:#f7f7f7;
          cursor: pointer;
      }
  
      #modalTarefa h3 b{
          cursor: pointer;
      }
  
      #modalTarefa h3:hover{
          background-color: #f1f1f1;
      }
  
      #containerChecklist h4:hover{
          padding: 5px;
          cursor: pointer;
          background-color: #f1f1f1;
      }
  
      @media only screen and (min-width : 768px) {
          .modal-dialog{
              width: 90%;
          }
      }
  
      @media only screen and (min-width : 992px) {
          .modal-dialog{
              width: 80%;
          }
      }
  
      /* Large Devices, Wide Screens */
      @media only screen and (min-width : 1200px) {
          .modal-dialog{
              width: 60%;
          }
      }
  
      @media only screen and (min-width : 1600px) {
          .modal-dialog{
              width: 50%;
          }
      }
  
      .containerTarefas > div{
          border-radius: 5px;
          -webkit-border-radius: 5px;
          -moz-border-radius: 5px;
      }
  
      .containerItensChecklist .checkbox a{
          display: none;
      }
  
      .containerItensChecklist .checkbox:hover a{
          display: inline;
      }
  
      #descricao{
          font-size: 1.5rem;
      }
  
      #descricao:hover{
          background-color: #f1f1f1;
          cursor:pointer;
      }
  
      #containerMembros > div {
          width:'30px';
          float: left;
      }
  
      #containerMembros > div a {
          display: none;
      }
  
      #containerMembros > div:hover {
          width: 50px;
          background-color: #f1f1f1;
          text-align: center;
          padding: 5px;
      }
  
      #containerMembros > div:hover a {
          display: block;
      }
  
      .comentario > p {
          margin-left: 40px;
      }
  
      .comentario {
          background-color: #fffdf1;
          border: solid 1px #f7f7f7;
          padding: 5px;
  
      }
  
      #marcarTempo h1 {
          font-size: 4em;
      }
  
      #containerMarcadores .label{
          text-transform: uppercase;
          margin-right: 5px;
          cursor: pointer;
      }
  
      #containerDataTarefa span .label {
          position: relative;
          padding-left: 20px;
      }
  
      #containerDataTarefa span .label input{
          position: absolute;
          left: 5px;
          top: 0px;
      }
  
      #containerDataTarefa #dataTarefa{
          cursor: pointer;
      }
  
      .box {
          height: 150px;
          text-align: center;
          padding: 15px;
          background-color: #f5f5f5;
      }
  
      .is-dragover {
          background-color: gray;
      }
  
      .box__file {
          width: 0.1px;
          height: 0.1px;
          opacity: 0;
          overflow: hidden;
          position: absolute;
          z-index: -1;
      }
  
      #anexosTarefa span a.removerAnexo{
          display: none;
      }
  
      #anexosTarefa span:hover a.removerAnexo{
          display: inherit;
      }
  
  </style>   
  </head>
  <body class="page-body skin-facebook">
    
            <div class="page-container">
    
                <!-- sidebar menu -->
        
                <div class="main-content" id="main-content"></div>
            </div>
    <script type="/bundle.js"></script>
  </body>
</html>
`;