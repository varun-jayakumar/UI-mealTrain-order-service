import DashboardLayout from "../../components/provider/layouts/DashboardLayout";
import ProfileSection from "../../components/provider/ProfileSection";
function Profile(props) {
  return (
    <div>
      <ProfileSection></ProfileSection>
    </div>
  );
}

Profile.layout = DashboardLayout;

export default Profile;
