import React from 'react';

function Header({id}) {
    // const navigate = useNavigate();

    return (
        <div className='header'>
            <div className='logo'>
                <h1 id='logo'> 신년카드 만들기 </h1>
                <h3 id='logo'> 로그인 </h3>
                <hr/>
            </div>
        </div>
  );
};

export default Header;