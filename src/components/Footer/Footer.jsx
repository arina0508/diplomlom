const Footer = () => {
  return (
    <footer className=" pt-10 items-center">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          <div class="mb-6">
            <h4 class=" text-lg font-semibold mb-3">Контакты</h4>
            <p>Телефон: +7 (123) 456-7890</p>
            <p>Email: info@example.com</p>
          </div>
          <div class="mr-8 mt-8">
            <p class="text-center">Правила сервиса</p>
          </div>
          <div class="mr-8 mt-5">
            <p class="text-center">Политика конфиденциальности</p>
          </div>
          <div class="mb-6">
            <h4 class="text-lg font-semibold mb-3">Мы в соцсетях</h4>
            <div class="flex items-center">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                class="mr-5"
              >
                <img class="w-10 h-10" src="/img/Group.svg" alt="" />
              </a>
              <a
                href="https://t.me/+AplToMAWwFQ5MjMy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img class="w-10 h-10" src="/img/Grop.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
