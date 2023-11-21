const LoginPage = () => {
  return (
    <section className=" bg-[#071e34] flex font-medium items-center justify-center h-full py-[10%]">
    <section className=" w-[40%]  mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
      <div className="flex items-center justify-center">
        <span className="text-gray-400 text-sm">PROFILE</span>
      </div>
      <div className="mt-6 w-fit mx-auto">
        <img
          src="https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/395052227_1351347252157931_853514659471710723_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFZOqlWI_vFHUazjVS_QdI9bqStUnq4uXhupK1Seri5eJafgbzAijB_5uXqIye_u5hkE3Bh18tkT3E3NajoQzxk&_nc_ohc=LN7vFictJXMAX8ypzcE&_nc_ht=scontent.fhan14-4.fna&oh=00_AfDArWI0YkvPnBmAZuILVHKQtCuh9Z61ywEojXZkFr3i-g&oe=6560D682"
          className="rounded-full w-40 "
          alt="profile picture"
          srcSet=""
        />
      </div>
      <div className="mt-8 text-center">
        <h2 className="text-white font-bold text-2xl tracking-wide">
          Vũ Hoài An
        </h2>
      </div>
      <p className="text-emerald-400 font-semibold mt-2.5 text-center">Tuổi: 21</p>
      <p className="text-blue-400 font-semibold mt-2.5 text-center">Quên quán: Hải Dương</p>
      <div className="mt-3 text-white text-sm">
        <span className="text-gray-400 font-semibold">Kĩ năng</span>

        <div className="mt-[20px]">
          <div className="flex justify-between items-end">
            <div>
              <img className="animate-bounce w-[50px] rounded-full" src="https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png" alt="" />
              <span>HTML5 & CSS3</span>
            </div>
            <div>
              <span>50%</span>
            </div>
          </div>
          <div className="h-1 w-full bg-black mt-[5px] rounded-full">
            <div className="h-1 rounded-full w-[50%] bg-yellow-500 " />
          </div>
        </div>
        <div className="mt-[20px]">
          <div className="flex justify-between items-end">
            <div>
              <img className="animate-bounce w-[50px] rounded-full" src="https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/7ca1b892-411f-4f4a-a5d3-82519495ae00/preview" alt="" />
              <span>JAVASCIPTS</span>
            </div>
            <div>
              <span>40%</span>
            </div>
          </div>
          <div className="h-1 w-full bg-black mt-[5px] rounded-full">
            <div className="h-1 rounded-full w-[40%] bg-yellow-500 " />
          </div>
        </div>
        <div className="mt-[20px]">
          <div className="flex justify-between items-end">
            <div>
              <img className="animate-bounce w-[50px] rounded-full" src="https://e7.pngegg.com/pngimages/631/270/png-clipart-php-php-thumbnail.png" alt="" />
              <span>PHP</span>
            </div>
            <div>
              <span>70%</span>
            </div>
          </div>
          <div className="h-1 w-full bg-black mt-[5px] rounded-full">
              <div className="h-1 rounded-full w-[70%] bg-yellow-500"/>
            </div>
          </div>
        </div>
      </section>
    </section>

    );
  };
  
  export default LoginPage;