import user from '../../apis/user';

export const useDeleteUser = () => {
  const deleteUser = async (accessToken: string) => {
    console.log('clicked?');
    try {
      await user.deleteUser(accessToken);
      return { success: true };
    } catch (err) {
      console.error(err);
      return { success: false };
    }
  };

  return { deleteUser };
};
