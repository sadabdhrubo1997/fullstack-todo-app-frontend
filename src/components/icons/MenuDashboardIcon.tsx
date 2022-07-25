interface IProps {
  width: number;
}

const MenuDashboardIcon = ({ width }: IProps) => {
  return (
    <>
      <svg
        width={width || '30'}
        height={width || '30'}
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.00573 0.0781662C0.699103 0.174864 0.176119 0.716672 0.082093 1.03508C-0.0273643 1.40575 -0.0273643 12.5887 0.082093 12.9594C0.183491 13.3027 0.701039 13.8205 1.04422 13.922C1.23789 13.9792 2.71163 13.998 7.01514 13.998C13.502 13.998 13.1063 14.028 13.582 13.4987C13.7306 13.3333 13.8855 13.0865 13.9264 12.9501C14.0328 12.5946 14.0328 1.39981 13.9264 1.04433C13.8855 0.907943 13.7306 0.661104 13.582 0.495774C13.1056 -0.0344708 13.5084 -0.00440518 6.97666 0.00284559C2.97365 0.00728357 1.15792 0.0302235 1.00573 0.0781662ZM16.9995 0.0781662C16.6929 0.174864 16.1699 0.716672 16.0759 1.03508C15.9664 1.40575 15.9664 12.5887 16.0759 12.9594C16.1773 13.3027 16.6948 13.8205 17.038 13.922C17.2317 13.9792 18.7054 13.998 23.0089 13.998C29.4958 13.998 29.1001 14.028 29.5758 13.4987C29.7244 13.3333 29.8793 13.0865 29.9202 12.9501C30.0266 12.5946 30.0266 1.39981 29.9202 1.04433C29.8793 0.907943 29.7244 0.661104 29.5758 0.495774C29.0994 -0.0344708 29.5021 -0.00440518 22.9704 0.00284559C18.9674 0.00728357 17.1517 0.0302235 16.9995 0.0781662ZM12.8477 1.15003L13.0011 1.30342V6.99722V12.691L12.8477 12.8444L12.6944 12.9979H7.0034H1.31243L1.15911 12.8444L1.00573 12.691V6.99722V1.30342L1.15911 1.15003L1.31243 0.996577H7.0034H12.6944L12.8477 1.15003ZM28.8415 1.15003L28.9948 1.30342V6.99722V12.691L28.8415 12.8444L28.6881 12.9979H22.9972H17.3062L17.1529 12.8444L16.9995 12.691V6.99722V1.30342L17.1529 1.15003L17.3062 0.996577H22.9972H28.6881L28.8415 1.15003ZM1.00573 16.0799C0.699103 16.1766 0.176119 16.7184 0.082093 17.0368C-0.0273643 17.4075 -0.0273643 28.5904 0.082093 28.9611C0.183491 29.3044 0.701039 29.8222 1.04422 29.9237C1.23789 29.9809 2.71163 29.9997 7.01514 29.9997C13.502 29.9997 13.1063 30.0298 13.582 29.5004C13.7306 29.3351 13.8855 29.0882 13.9264 28.9518C14.0328 28.5963 14.0328 17.4015 13.9264 17.046C13.8855 16.9097 13.7306 16.6628 13.582 16.4975C13.1056 15.9672 13.5084 15.9973 6.97666 16.0046C2.97365 16.009 1.15792 16.0319 1.00573 16.0799ZM16.9995 16.0799C16.6929 16.1766 16.1699 16.7184 16.0759 17.0368C15.9664 17.4075 15.9664 28.5904 16.0759 28.9611C16.1773 29.3044 16.6948 29.8222 17.038 29.9237C17.2317 29.9809 18.7054 29.9997 23.0089 29.9997C29.4958 29.9997 29.1001 30.0298 29.5758 29.5004C29.7244 29.3351 29.8793 29.0882 29.9202 28.9518C30.0266 28.5963 30.0266 17.4015 29.9202 17.046C29.8793 16.9097 29.7244 16.6628 29.5758 16.4975C29.0994 15.9672 29.5021 15.9973 22.9704 16.0046C18.9674 16.009 17.1517 16.0319 16.9995 16.0799ZM12.8477 17.1517L13.0011 17.3051V22.9989V28.6927L12.8477 28.8461L12.6944 28.9996H7.0034H1.31243L1.15911 28.8461L1.00573 28.6927V22.9989V17.3051L1.15911 17.1517L1.31243 16.9983H7.0034H12.6944L12.8477 17.1517ZM28.8415 17.1517L28.9948 17.3051V22.9989V28.6927L28.8415 28.8461L28.6881 28.9996H22.9972H17.3062L17.1529 28.8461L16.9995 28.6927V22.9989V17.3051L17.1529 17.1517L17.3062 16.9983H22.9972H28.6881L28.8415 17.1517Z"
        />
      </svg>
    </>
  );
};

export default MenuDashboardIcon;