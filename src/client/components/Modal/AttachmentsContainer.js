import React from "react";

const AttachmentsContainer = () => {
  return (
    <div>
      <p>
        <a id="btnAnexos" href="#">
          + Anexos
          <i className="fa fa-files-o" />
        </a>
      </p>
      <hr />
      <div id="containerAnexos">
        <div>
          <form
            id="formAnexos"
            className="box text-center hide"
            method="post"
            action="/inova/QuadroTarefas/uploadAnexos"
            encType="multipart/form-data"
          >
            <br />
            <input
              className="box__file"
              type="file"
              name="files[]"
              id="file"
              multiple=""
            />
            <label htmlFor="file">
              <h3>Clique aqui or arraste e solte os arquivos</h3>
            </label>
            <br />
          </form>

          <div id="anexosTarefa" />
        </div>
      </div>
    </div>
  );
};

export default AttachmentsContainer;
