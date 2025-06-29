// useWishlist.js
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "@/slices/wishlistSlice";
import toast from "react-hot-toast";

const toastConfig = {
  duration: 3000,
  position: "top-center",
  style: {
    background: "#000",
    color: "#fff",
    fontFamily: "var(--font-josefin-sans)",
  },
};

const useWishlist = (itemData) => {
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  // Check if item is in wishlist
  const isInWishlist = wishlistItems.some((item) => item.id === itemData.id);

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(itemData));
      toast.success(`${itemData.name} removed from wishlist!`, toastConfig);
    } else {
      dispatch(addToWishlist(itemData));
      toast.success(`${itemData.name} added to wishlist!`, toastConfig);
    }
  };

  return { isInWishlist, handleWishlistToggle };
};

export default useWishlist;
