const NewsLetter = () => {
  return (
    <div>
      <h3 className="text-lg font-bold pt-6">Newsletter</h3>
      <p className="mt-4 text-sm">
        Subscribe to our newsletter to get the latest updates.
      </p>
      <form className="mt-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="mt-2 w-full bg-black text-white p-2 rounded">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
