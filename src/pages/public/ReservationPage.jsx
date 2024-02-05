import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Logo from '../../components/Logo';
import './ReservationPage.scss';

const InputFieldGroup = ({ id }) => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    option1: false,
    option2: false,
    option3: false,
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    // 여기서 formData를 처리하고, 예를 들어 서버에 보낼 수 있습니다.
    console.log(formData);
    setSuccessMessage('cette demande a ete bien enregistre.'); // 성공 메시지 설정

        event.preventDefault(); // 폼 제출 기본 동작 방지
      
        // 서버로 보낼 요청 본문 생성
        const requestBody = {
          nom: formData.nom,
          prenom: formData.prenom,
          email: formData.email,
          DateId: [
            formData.option1 ? "1" : null,
            formData.option2 ? "2" : null,
            formData.option3 ? "3" : null,
          ].filter(Boolean), // 선택된 날짜만 필터링
        };
      
        try {
          const response = await fetch('http://localhost:4000/api/reservations', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody), // 요청 본문에 JSON 형태로 변환하여 추가
          });
      
          if (response.ok) {
            const result = await response.json(); // 서버 응답을 JSON 형태로 변환
            setSuccessMessage('cette demande a ete bien enregistre.');
            console.log('Success:', result);
          } else {
            throw new Error('Network response was not ok.');
          }
        } catch (error) {
          console.error('Error:', error);
          setSuccessMessage('Il y avait un problème avec votre demande.');
        }
      
  };

  return (
    <form onSubmit={handleSubmit}>
      <div key={id}>
        <hr />
        <input
          type="text"
          name="nom"
          placeholder="Nom"
          value={formData.nom}
          onChange={handleChange}
        />
        <input
          type="text"
          name="prenom"
          placeholder="Prénom"
          value={formData.prenom}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail :"
          value={formData.email}
          onChange={handleChange}
        />
        <div className="checkbox--div">
          <label>
            <input
              type="checkbox"
              name="option1"
              checked={formData.option1}
              onChange={handleChange}
            />
            Vendredi
          </label>
          <label>
            <input
              type="checkbox"
              name="option2"
              checked={formData.option2}
              onChange={handleChange}
            />
            Samedi
          </label>
          <label>
            <input
              type="checkbox"
              name="option3"
              checked={formData.option3}
              onChange={handleChange}
            />
            Dimanche
          </label>
        </div>
        <button type="submit" className="btn__reservation">
          Envoyer
        </button>
        {successMessage && <p>{successMessage}</p>}
      </div>
    </form>
  );
};

function ReservationPage() {
  const [inputFieldCount, setInputFieldCount] = useState(0);

  const handleCreate = (event) => {
    const count = Number(event.target.value);
    setInputFieldCount(count);
  };

  return (
    <>
      <Header />
      <Logo text="RESERVATION" />
      <div className="form--reservation">
        <select id="number" name="number" onChange={handleCreate}>
          <option value="">Select numbers of members</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        {Array.from({ length: inputFieldCount }, (_, i) => (
          <InputFieldGroup key={i} id={i} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default ReservationPage;
