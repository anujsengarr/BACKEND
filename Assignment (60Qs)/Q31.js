function updateAddressCity(user, newCity) {
  return { ...user, address: { ...user.address, city: newCity } };
}

console.log(updateAddressCity({ name: 'A', address: { city: 'Old', zip: 123 } }, 'New'));
