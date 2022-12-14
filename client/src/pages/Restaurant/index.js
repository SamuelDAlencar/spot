import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axiosRequest from '../../helpers/axiosRequest';
import Header from '../../components/Header';
import Card from '../../components/Card';
// Creditos da imagem: https://flyclipart.com/gps-location-map-pin-pin-restaurant-icon-restaurant-icon-png-237324
import restaurantIcon from '../../images/restaurant.jpg';
import StyledRestaurant from './style';
import { IoLocationSharp } from 'react-icons/io5';
import { BsFillTelephoneFill } from 'react-icons/bs';

export default function Restaurant() {
  const { id } = useParams();
  const [user] = useState(JSON.parse(localStorage.getItem('user')));
  const [foods, setFoods] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [restaurant, setRestaurant] = useState();
  const [mobileFilter, setMobileFilter] = useState('foods');
  const navigate = useNavigate();

  const requestItems = async () => {
    const response = await axiosRequest('GET', {}, {
      authorization: user.token
    }, `item/${id}`);

    response.data.map((item) => {
      if (item.type === 'food') {
        setFoods(prevState => [...prevState, item]);
      } else {
        setDrinks(prevState => [...prevState, item]);
      }
    });
  };

  const requestRestaurant = async () => {
    const response = await axiosRequest('GET', {}, {
      authorization: user.token
    }, `restaurant/${id}`);

    setRestaurant(response.data);
  };

  useEffect(() => {
    if (!user) navigate('/login');
    requestRestaurant();
    requestItems();
  }, []);

  return (
    <>
      <Header />
      <StyledRestaurant>
        <section className='restInfo_section'>
          <img alt='Restaurant_icon' src={restaurantIcon} />
          <section>
            <h1>{restaurant?.name}</h1>
            <h2>
              <IoLocationSharp
                className='icon'
              />
              Endereço: {restaurant?.address}</h2>
            <h2>
              <BsFillTelephoneFill
                className='icon'
              />
              Número: <span>{restaurant?.phone}</span></h2>
          </section>
        </section>
        {/* Versão mobile (- 500px) */}
        <section className='mobile_buttons_section'>
          <button
            className={mobileFilter === 'foods' ? 'active_mobile_button' : 'inactive_mobile_button'}
            onClick={() => setMobileFilter('foods')}
          >
            Cardápio
          </button>
          <button
            className={mobileFilter === 'drinks' ? 'active_mobile_button' : 'inactive_mobile_button'}
            onClick={() => setMobileFilter('drinks')}
          >
            Bebidas
          </button>
        </section>
        <section className='foods_section_mobile'>
          {mobileFilter === 'foods' && (
            foods.length !== 0 ? (
              <section className='food_list'>
                {foods?.map(({ id, name, description, price, type }) => {
                  return (
                    <Card
                      key={id}
                      name={name}
                      description={description}
                      price={price}
                      type={type}
                    />
                  );
                })}
              </section>)
              : (
                <h1 className='no_menu'>
                  Ops, parece que o <span>{restaurant?.name}</span> não publicou nenhum item ainda :(
                </h1>))}
        </section>
        <section className='drinks_section_mobile'>
          {mobileFilter === 'drinks' && (
            foods.length !== 0 ? (
              <section className='drink_list'>
                {drinks?.map(({ id, name, description, price, type }) => {
                  return (
                    <Card
                      key={id}
                      name={name}
                      description={description}
                      price={price}
                      type={type}
                    />
                  );
                })}
              </section>)
              : (
                <h1 className='no_menu'>
                  Ops, parece que o <span>{restaurant?.name}</span> não publicou nenhuma bebida ainda :(
                </h1>))}</section>
        {/* Versão desktop (+ 500px) */}
        <section className='foods_section'>
          <h1>Cardápio</h1>
          {foods.length !== 0 ? (
            <section className='food_list'>
              {foods?.map(({ id, name, description, price, type }) => {
                return (
                  <Card
                    key={id}
                    name={name}
                    description={description}
                    price={price}
                    type={type}
                  />
                );
              })}
            </section>
          )
            : (
              <h1 className='no_menu'>
                Ops, parece que o <span>{restaurant?.name}</span> não publicou nenhum item ainda :(
              </h1>)}
        </section>

        <section className='drinks_section'>
          <h1>Bebidas</h1>
          {foods.length !== 0 ? (
            <section className='drink_list'>
              {drinks?.map(({ id, name, description, price, type }) => {
                return (
                  <Card
                    key={id}
                    name={name}
                    description={description}
                    price={price}
                    type={type}
                  />
                );
              })}
            </section>
          )
            : (
              <h1 className='no_menu'>
                Ops, parece que o <span>{restaurant?.name}</span> não publicou nenhuma bebida ainda :(
              </h1>)}
        </section>
      </StyledRestaurant>
    </>
  );
}
