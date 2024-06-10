import React from 'react';
import { Button } from 'antd';
import './InformationBlock1.css';

const InformationBlock1: React.FC = () => {
  return (
    <div className="info-section">
      <div className="info-content">
        <div className="text-section">
          <h1>Ресторан "Люкс и Вкус"</h1>
          <p>
            Ресторан "Люкс и Вкус" является воплощением изысканности и кулинарного искусства в самом центре города.
            У нас сочетаются утонченная атмосфера и превосходное меню, разработанное шеф-поваром с многолетним опытом в лучших ресторанах мира.
          </p>
          <p>
            Интерьер ресторана выполнен в спокойных и элегантных тонах, с мягким освещением и роскошными элементами декора. Просторный зал идеально подходит как для романтических ужинов,
            так и для деловых встреч и торжественных мероприятий.
          </p>
          <p>
            Меню "Люкс и Вкус" предлагает широкий выбор блюд, приготовленных из самых свежих и качественных ингредиентов.
            Будь то авторские блюда, вдохновленные кухнями разных народов, или классические рецепты в новом прочтении — каждый гость найдет что-то для себя.
            Особое внимание мы уделяем вегетарианским и веганским блюдам, а также разнообразным десертам, которые станут достойным завершением вашего ужина.
          </p>
          <p>
            Винная карта ресторана включает в себя тщательно отобранные вина со всего мира, идеально дополняющие наш гастрономический шедевр.
          </p>
          <p>
            Приходите в "Люкс и Вкус" и насладитесь не только едой, но и атмосферой комфорта и безупречного сервиса.
            Мы уверены, что ваше посещение оставит неизгладимые впечатления и желание возвращаться снова и снова.
          </p>
          <Button type="primary" className="menu-button">Посмотреть меню</Button>
        </div>
        <div className="image-section">
          <img src="/eda-1.jpg" alt="Еда 1" />
          <img src="/eda-2.jpg" alt="Еда 2" />
          <img src="/eda-3.jpg" alt="Еда 3" />
        </div>
      </div>
    </div>
  );
};

export default InformationBlock1;