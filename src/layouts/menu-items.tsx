import { routes } from "@/config/routes";
import { FaCartArrowDown, FaCogs, FaMapMarkerAlt } from "react-icons/fa";
import { FaCartShopping, FaTruckFast } from "react-icons/fa6";
import { GiFilmProjector } from "react-icons/gi";
import { HiTicket } from "react-icons/hi2";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdPhotoSizeSelectLarge } from "react-icons/md";
import { PiFlagBannerFill, PiFlagCheckeredFill } from "react-icons/pi";
import { TbRecycle, TbUserBolt, TbUserCog, TbUserDollar } from "react-icons/tb";

// Note: do not add href in the label object, it is rendering as label
export const menuItems = {
  admin: [
    {
      name: "Dashboard",
      href: routes.admin.dashboard,
      icon: <LuLayoutDashboard />
    },
    {
      name: "Manage Orders",
      href: "#",
      icon: <FaCartShopping />,
      dropdownItems: [
        {
          name: "New Orders",
          href: routes.admin.manageOrders.new
        },
        {
          name: "Running Orders",
          href: routes.admin.manageOrders.running
        },
        {
          name: "Completed Orders",
          href: routes.admin.manageOrders.completed
        },
        {
          name: "Cancelled Orders",
          href: routes.admin.manageOrders.cancelled
        }
      ]
    },
    {
      name: "Manage Moderators",
      href: "#",
      icon: <TbUserBolt />,
      dropdownItems: [
        {
          name: "Moderators",
          href: routes.admin.manageModerator.moderators
        },
        {
          name: "Reports",
          href: routes.admin.manageModerator.reports
        }
      ]
    },
    {
      name: "Manage Studio Partners",
      href: "#",
      icon: <GiFilmProjector />,
      dropdownItems: [
        {
          name: "Studio Partners",
          href: routes.admin.manageStudioPartner.studioPartners
        },
        {
          name: "Reports",
          href: routes.admin.manageStudioPartner.reports
        }
      ]
    },
    {
      name: "Manage Delivery Partners",
      href: "#",
      icon: <FaTruckFast />,
      dropdownItems: [
        {
          name: "Delivery Partners",
          href: routes.admin.manageDeliveryPartner.deliveryPartners
        },
        {
          name: "Reports",
          href: routes.admin.manageDeliveryPartner.reports
        }
      ]
    },
    {
      name: "Manage Photo Ratio",
      href: "#",
      icon: <MdPhotoSizeSelectLarge />,
      dropdownItems: [
        {
          name: "Document Category",
          href: routes.admin.managePhotoRatio.documentCategory
        },
        {
          name: "Assign DocType",
          href: routes.admin.managePhotoRatio.assignDocType
        }
      ]
    },
    {
      name: "Manage Area & Charges",
      href: "#",
      icon: <FaMapMarkerAlt />,
      dropdownItems: [
        {
          name: "Delivery Charges",
          href: routes.admin.manageAreaAndCharges.deliveryCharges
        },
        {
          name: "Serviceable Area",
          href: routes.admin.manageAreaAndCharges.serviceableAreas
        }
      ]
    },
    {
      name: "Manage Coupons",
      href: routes.admin.manageCoupons,
      icon: <HiTicket />
    },
    {
      name: "Manage Banners",
      href: routes.admin.manageBanners,
      icon: <PiFlagBannerFill />
    },
    {
      name: "Manage Users",
      href: routes.admin.manageUsers,
      icon: <TbUserDollar />
    },
    {
      name: "Manage Admins",
      href: routes.admin.manageAdmins,
      icon: <TbUserCog />
    },
    {
      name: "General Settings",
      href: routes.admin.generalSettings,
      icon: <FaCogs />
    }
  ],
  moderator: [
    {
      name: "Dashboard",
      href: routes.moderator.dashboard,
      icon: <LuLayoutDashboard />
    },
    {
      name: "New Orders",
      href: routes.moderator.newOrders,
      icon: <FaCartArrowDown />
    },
    {
      name: "Re-Assign Orders",
      href: routes.moderator.reAssignOrders,
      icon: <TbRecycle />
    },
    {
      name: "Past Orders",
      href: routes.moderator.pastOrders,
      icon: <PiFlagCheckeredFill />
    }
  ],
  studioPartner: [
    {
      name: "Dashboard",
      href: routes.moderator.dashboard,
      icon: <LuLayoutDashboard />
    },
    {
      name: "New Orders",
      href: routes.moderator.newOrders,
      icon: <FaCartArrowDown />
    },
    {
      name: "Past Orders",
      href: routes.moderator.pastOrders,
      icon: <PiFlagCheckeredFill />
    }
  ],
  deliveryPartner: [
    {
      name: "Dashboard",
      href: routes.moderator.dashboard,
      icon: <LuLayoutDashboard />
    },
    {
      name: "New Orders",
      href: routes.deliveryPartner.newOrders,
      icon: <FaCartArrowDown />
    },
    {
      name: "Past Orders",
      href: routes.deliveryPartner.pastOrders,
      icon: <PiFlagCheckeredFill />
    },
    {
      name: "Manage Delivery Boys",
      href: routes.deliveryPartner.deliveryBoys,
      icon: <PiFlagCheckeredFill />
    }
  ],
  deliveryBoy: [
    {
      name: "Dashboard",
      href: routes.moderator.dashboard,
      icon: <LuLayoutDashboard />
    },
    {
      name: "New Orders",
      href: routes.deliveryBoy.newOrders,
      icon: <FaCartArrowDown />
    },
    {
      name: "Past Orders",
      href: routes.deliveryBoy.pastOrders,
      icon: <PiFlagCheckeredFill />
    }
  ]
};
