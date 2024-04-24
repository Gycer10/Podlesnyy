const orderForm = document.getElementById('order-form');
const productInput = document.getElementById('product');
const quantityInput = document.getElementById('quantity');

function validateProductForm(event) {
  if ((checkQuantity() && checkComment() === true)) {
      event.preventDefault();
      const quantity = document.getElementById("quantity").value;
      const comments = document.getElementById("comments").value;

      let summaryHtml = `
          <strong>Количество:</strong> ${quantity}<br>
          <strong>Дополнительные комментарии:</strong> ${comments}
      `;

      document.getElementById("summaryContent").innerHTML = summaryHtml;
      document.getElementById("summaryBlock").style.display = 'block';
      document.getElementById("summary").style.display = "none";

      return true;
  } else {
          document.getElementById("summary").style.color = "red";
          document.getElementById("summary").innerHTML = "Пожалуйста, введите корректные данные";
          const text = document.getElementById("hidden");
          text.style.display = "block";
  }
}
  
  function checkQuantity() {
    var quantityString = document.getElementById("quantity").value;
    var quantity = parseFloat(quantityString);

    if (!isNaN(quantity) && quantity > 0) {
        document.getElementById("quantity").style.color = "green";
        document.getElementById("quantity").nextElementSibling.innerHTML = "Корректно";
        return true;
    } else {
        document.getElementById("quantity").style.color = "red";
        document.getElementById("quantity").nextElementSibling.innerHTML = "Некорректно";
        return false;
    }
}
  function checkComment() {
  var comments = document.getElementById("comments").value;
  var words = comments.split(/\s+/).filter(Boolean);

  if (words.length <= 20) {
      document.getElementById("comments").style.color = "green";
      document.getElementById("comments").nextElementSibling.innerHTML = "Корректно";
      return true;
  } else {
      document.getElementById("comments").style.color = "red";
      document.getElementById("comments").nextElementSibling.innerHTML = "Некорректно";
      return false;
  }
}
  function validateCallBackForm() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    if (name.trim() === "") {
      alert("Пожалуйста, введите ваше имя!");

orderForm.addEventListener('submit', function(event) {
  if (productInput.value === '' || quantityInput.value === '') {
    event.preventDefault();
    alert('Пожалуйста, заполните все поля формы заказа продукта или услуги!');
  }
});
    }
// Изменение стилей элементов на странице
document.getElementById('product').style.color = 'red';
document.getElementById('comments').style.display = 'none';
  }