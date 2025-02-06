export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-t-transparent"></div>
      <p className="mt-4 text-lg font-medium text-gray-600">Loading, please wait...</p>
    </div>
  );
}
