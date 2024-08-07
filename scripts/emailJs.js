document.querySelector("#mail-form").addEventListener("submit", sendMail)

function sendMail(e) {
  e.preventDefault()

  const formValues = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    tel: document.getElementById("tel").value,
    message: document.getElementById("subject").value,
  }

  const serviceID = "service_e6co8k8"
  const templateID = "template_pct9c5n"

  emailjs
    .send(serviceID, templateID, formValues)
    .then((res) => {
      alert(
        `Obrigado ${formValues.name}, sua mensagem foi enviada com sucesso!`
      )
      location.reload()
    })
    .catch(() => {
      alert(
        "Um erro ocorreu! =(\nPor favor envie um email para bikcraft@contato.com.br"
      )
    })
}
