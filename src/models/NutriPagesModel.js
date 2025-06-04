class NutriPagesModel {
  constructor() {
    this.foodDetail = {
      name: '',
      nutrition: '',
    };
  }

  /**
   * Menyimpan data makanan yang akan ditampilkan di halaman detail.
   * @param {string} name - Nama makanan
   * @param {string} nutrition - Deskripsi kandungan nutrisi
   */
  setFoodDetail(name, nutrition) {
    this.foodDetail = {
      name,
      nutrition,
    };
  }

  /**
   * Mengambil data makanan yang tersimpan.
   * @returns {{name: string, nutrition: string}}
   */
  getFoodDetail() {
    return this.foodDetail;
  }

  /**
   * Menghapus data yang tersimpan (optional).
   */
  clearFoodDetail() {
    this.foodDetail = {
      name: '',
      nutrition: '',
    };
  }
}

export default new NutriPagesModel();
