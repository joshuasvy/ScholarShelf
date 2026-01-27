import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import ProfileUpload from "../components/ProfileUpload";
import SettingSection from "../components/SettingSection";
import Toggle from "../components/Toggle";
import Footer from "../components/Footer";

function Profile() {
  return (
    <div className="bg-primary min-h-screen w-full">
      <Header />
      <div className="mt-18 hidden md:block md:px-18 lg:px-32">
        <Breadcrumb />
      </div>
      <main className="mx-4 pt-10 md:pt-0 md:pb-12 md:mt-14 md:px-18 lg:px-0 max-w-7xl md:mx-auto">
        <div className="mb-2">
          <ProfileUpload />
        </div>
        <div>
          <SettingSection title="Personal Information">
            <SettingSection.Row
              label="Name"
              data="John Doe"
              action={
                <button className="cursor-pointer">
                  <img
                    src="/images/icons/edit.png"
                    alt="Edit"
                    className="w-5 md:w-6"
                  />
                </button>
              }
            />
            <SettingSection.Row
              label="Address"
              data="Blk 7 Lot 2 Phase 1-F Sub-Urban, San Jose, Rodriguez, Rizal"
              action={
                <button className="cursor-pointer">
                  <img
                    src="/images/icons/edit.png"
                    alt="Edit"
                    className="w-5 md:w-6"
                  />
                </button>
              }
            />
            <SettingSection.Row
              label="Contact"
              data="09010101010"
              action={
                <button className="cursor-pointer">
                  <img
                    src="/images/icons/edit.png"
                    alt="Edit"
                    className="w-5 md:w-6"
                  />
                </button>
              }
            />
            <SettingSection.Row
              label="Email"
              data="scholarshelf@gmail.com"
              action={
                <button className="cursor-pointer">
                  <img
                    src="/images/icons/edit.png"
                    alt="Edit"
                    className="w-5 md:w-6"
                  />
                </button>
              }
            />
          </SettingSection>
          <SettingSection title="Security">
            <SettingSection.Row
              label="Two Factor Authentication"
              action={
                <Toggle
                  enabled={false}
                  onChange={(val) => console.log("Toggled:", val)}
                />
              }
            />
            <SettingSection.Row
              label="Password"
              data="********"
              action={
                <button className="cursor-pointer">
                  <img
                    src="/images/icons/edit.png"
                    alt="Edit"
                    className="w-5 md:w-6"
                  />
                </button>
              }
            />
            <SettingSection.Row label="When you're logged in" />
          </SettingSection>
          <SettingSection title="Browser Preferences">
            <SettingSection.Row
              label="Dark Mode"
              action={
                <Toggle
                  enabled={false}
                  onChange={(val) => console.log("Toggled:", val)}
                />
              }
            />
          </SettingSection>
        </div>
      </main>
      <div className="mt-14 md:mt-4">
        <Footer />
      </div>
    </div>
  );
}

export default Profile;
