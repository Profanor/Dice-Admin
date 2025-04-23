const variants = {
  primary: {
    solid: {
      enabled: {
        button: "bg-primary text-white",
        icon: "white",
        loader: "bg-white",
      },
      disabled: {
        button: "bg-primary text-white opacity-40",
        icon: "white",
        loader: "bg-white",
      },
    },
    outline: {
      enabled: {
        button: "border border-primary text-primary",
        icon: "#1e7ad3",
        loader: "bg-primary-400",
      },
      disabled: {
        button: "border border-primary-200 text-primary-200",
        icon: "#D4F6E4",
        loader: "bg-primary-200",
      },
    },
    ghost: {
      enabled: {
        button: "text-primary",
        icon: "#1e7ad3",
        loader: "bg-primary-400",
      },
      disabled: {
        button: "text-primary-200",
        icon: "#D4F6E4",
        loader: "bg-primary-200",
      },
    },
  },
  danger: {
    solid: {
      enabled: {
        button: "bg-orange text-white",
        icon: "white",
        loader: "bg-white",
      },
      disabled: {
        button: "bg-orange-400 text-white",
        icon: "white",
        loader: "bg-white",
      },
    },
    outline: {
      enabled: {
        button: "border border-orange text-orange",
        icon: "#FD6E5E",
        loader: "bg-orange",
      },
      disabled: {
        button: "border border-orange-400 text-orange-400",
        icon: "#FFDEE9",
        loader: "bg-orange-400",
      },
    },
    ghost: {
      enabled: {
        button: "text-orange",
        icon: "#FD6E5E",
        loader: "bg-orange",
      },
      disabled: {
        button: "text-orange-400",
        icon: "#FFDEE9",
        loader: "bg-orange-400",
      },
    },
  },
  warning: {
    solid: {
      enabled: {
        button: "bg-yellow text-white",
        icon: "white",
        loader: "bg-white",
      },
      disabled: {
        button: "bg-yellow-400 text-white",
        icon: "white",
        loader: "bg-white",
      },
    },
    outline: {
      enabled: {
        button: "border border-yellow text-yellow",
        icon: "#FFCC00",
        loader: "bg-yellow",
      },
      disabled: {
        button: "border border-yellow-400 text-yellow-400",
        icon: "#FFF7DD",
        loader: "bg-yellow-400",
      },
    },
    ghost: {
      enabled: {
        button: "text-yellow",
        icon: "#FFCC00",
        loader: "bg-yellow",
      },
      disabled: {
        button: "text-yellow-400",
        icon: "#FFF7DD",
        loader: "bg-yellow-400",
      },
    },
  },
  secondary: {
    solid: {
      enabled: {
        button: "bg-black-700 text-white",
        icon: "white",
        loader: "bg-white",
      },
      disabled: {
        button: "bg-gray-200 text-white",
        icon: "white",
        loader: "bg-white",
      },
    },
    outline: {
      enabled: {
        button: "border border-gray-200 text-black-700",
        icon: "#313131",
        loader: "bg-black-700",
      },
      disabled: {
        button: "border border-gray-300 text-gray-300",
        icon: "#E7E7E7",
        loader: "bg-gray-300",
      },
    },
    ghost: {
      enabled: {
        button: "text-black-700",
        icon: "#313131",
        loader: "bg-black-700",
      },
      disabled: {
        button: "text-gray-300",
        icon: "#E7E7E7",
        loader: "bg-gray-300",
      },
    },
  },
};

export default variants;
