export const formValidation = () => {
  const validate_1 = new window.JustValidate(".left form");
  const validate_2 = new window.JustValidate(".right form");
  const error_1 = document.querySelector(".left").querySelector(".err_doc");
  const error_2 = document.querySelector(".right").querySelector(".err_doc");
  validate_1
    .addField("#name", [
      {
        rule: "required",
        errorMessage: "Vacib xana",
      },
    ])
    .addField(".region input", [
      {
        rule: "required",
        errorMessage: "Vacib xana",
      },
    ])
    .addField("input[name=adress]", [
      {
        rule: "required",
        errorMessage: "Vacib xana",
      },
    ])
    .addField("input[name=tel]", [
      {
        rule: "required",
        errorMessage: "Vacib xana",
      },
      {
        rule: "customRegexp",
        value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
        errorMessage: "Yanlış format",
      },
    ])
    .addField("input[name=email]", [
      {
        rule: "required",
        errorMessage: "Vacib xana",
      },
      {
        rule: "email",
        errorMessage: "Yanlış format",
      },
    ])
    .addField("input[name=file]", [
      {
        rule: "minFilesCount",
        value: 1,
        errorMessage: "Vacib xana",
      },
      {
        rule: "files",
        value: {
          files: {
            extensions: ["png", "jpg"],
            types: ["image/jpeg", "image/png"],
          },
        },
        errorMessage: "Yanlış şəkil tipi (JPG, PNG)",
      },
    ])
    .addRequiredGroup(".professions", "Vacib xana", {
      errorFieldCssClass: "error",
    })
    .onFail(() => {
      error_1.style = "display:block";
      error_1.innerHTML =
        ' <div class="alert alert-danger" role="alert">* ulduzla işarələnmiş xanaları mütləq doldurun<br>Çətinlik yaşadığınız zaman <a href="https://wa.me/994504300870" target="_blank">(050) 430 08 70</a> nömrəsi ilə əlaqə saxlaya bilərsiniz</div>';
    })
    .onSuccess(() => {
      document.querySelector(".left form").reset();
      error_1.style = "display:block";
      error_1.innerHTML =
        '<div class="alert alert-success" role="alert">Müraciətiniz uğurla göndərildi. Təşəkkür edirik.</div>';
    });

  validate_2
    .addField("input[name=name]", [
      {
        rule: "required",
        errorMessage: "Vacib xana",
      },
    ])
    .addField(".region input", [
      {
        rule: "required",
        errorMessage: "Vacib xana",
      },
    ])
    .addField("input[name=adress]", [
      {
        rule: "required",
        errorMessage: "Vacib xana",
      },
    ])
    .addField("input[name=tel]", [
      {
        rule: "required",
        errorMessage: "Vacib xana",
      },
      {
        rule: "customRegexp",
        value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
        errorMessage: "Yanlış format",
      },
    ])

    .addField("input[name=file_1]", [
      {
        rule: "minFilesCount",
        value: 1,
        errorMessage: "Vacib xana",
      },
      {
        rule: "files",
        value: {
          files: {
            extensions: ["png", "jpg"],
            types: ["image/jpeg", "image/png"],
          },
        },
        errorMessage: "Yanlış şəkil tipi (JPG, PNG)",
      },
    ])
    .addField("input[name=file_2]", [
      {
        rule: "minFilesCount",
        value: 1,
        errorMessage: "Vacib xana",
      },
      {
        rule: "files",
        value: {
          files: {
            extensions: ["png", "jpg"],
            types: ["image/jpeg", "image/png"],
          },
        },
        errorMessage: "Yanlış şəkil tipi (JPG, PNG)",
      },
    ])
    .onFail(() => {
      error_2.style = "display:block";
      error_2.innerHTML =
        ' <div class="alert alert-danger" role="alert">* ulduzla işarələnmiş xanaları mütləq doldurun<br>Çətinlik yaşadığınız zaman <a href="https://wa.me/994504300870" target="_blank">(050) 430 08 70</a> nömrəsi ilə əlaqə saxlaya bilərsiniz</div>';
    })
    .onSuccess(() => {
      document.querySelector(".right form").reset();
      error_2.style = "display:block";
      error_2.innerHTML =
        '<div class="alert alert-success" role="alert">Müraciətiniz uğurla göndərildi. Təşəkkür edirik.</div>';
    });
};
