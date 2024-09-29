import React from 'react';
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
    const loggedIn = {firstName: "Bro"}
    return (
        <section className="home">
          <div className="home-content">
              <header className="home-header">
                <HeaderBox
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.firstName || "Not Bro"}
                    subtext="Access and manage your account and transcations efficiently."
                />
              </header>
              <TotalBalanceBox
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={1250.69}

              />
          </div>
        </section>
    );
};

export default Home;