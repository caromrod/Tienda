class cProducto{

    Id;
    Nombre;
    Descripcion;
    UrlImg1;
    Precio;
    Categoria;
    Genero;

    constructor(_Id, _Nombre, _Descripcion, _UrlImg1, _Precio, _Categ, _genero)
    {
        this.Id = _Id;
        this.Nombre = _Nombre;
        this.Descripcion = _Descripcion;
        this.UrlImg1 = _UrlImg1;
        this.Precio = _Precio;
        this.Categoria = _Categ;
        this.Genero = _genero;
    }
}

const Camisas = [
    new cProducto(0, 'Camisa Bordo', 'Camisa de seda, suave y fresca para el verano', '../IMG/Camisas/camisa-bord-m.jpg', 2650, 'camisas','mujer'),
    new cProducto(1, 'Camisa Floreada', 'Camisa de tela fina', '../IMG/Camisas/camisa-flor-m.jpg', 3050, 'camisas','mujer'),
    new cProducto(2, 'Camisa Blanca', 'Tradicional para todas las ocasiones', '../IMG/Camisas/camisa-blanc-m.jpg', 2650, 'camisas','mujer'),
    new cProducto(3, 'Camisa Mostaza', 'Super cómoda', '../IMG/Camisas/camisa-mostaza-m.jpg', 2650, 'camisas','mujer'),
    new cProducto(4, 'Camisa Beige', '..', '../IMG/Camisas/camisa-beige-h.jpeg', 2650, 'camisas','hombre'),
    new cProducto(5, 'Camisa Bordo oscura', 'Camisa para primavera', '../IMG/Camisas/camisa-bordo.jpg', 2650, 'camisas','mujer'),
    new cProducto(6, 'Camisa Cuadros', 'Camisa para primavera', '../IMG/Camisas/camisa-cuad-h.jpg', 2650, 'camisas','hombre'),
    new cProducto(7, 'Camisa Cuadros', 'Camisa a cuadros para niños', '../IMG/Camisas/camisa-cuadr-nin.jpg', 2650, 'camisas','niños'),
    new cProducto(8, 'Camisa a rayas H', 'Camisa para primavera', '../IMG/Camisas/camisa-raya-h.jpg', 2650, 'camisas','hombre'),
    new cProducto(9, 'Camisa Niños', 'Camisa para primavera', '../IMG/Camisas/camisa-niñ-n.jpg', 2650, 'camisas','niños'),
    new cProducto(10, 'Camisa Verde', 'Camisa para primavera', '../IMG/Camisas/camisa-ver-h.jpg', 2650, 'camisas','hombre'),
    new cProducto(11, 'Camisa Verde', 'Camisa para primavera', '../IMG/Camisas/camisa-verylin-h.jpg', 2650, 'camisas','hombre')
];



const Bufandas = [
    new cProducto(12, 'Pañuelo con estampado de voluta gris', 'Color: Multicolor, Estilo:	Casual, Composición:	100% Poliéster', '../IMG/bufandas/1.webp', 1300, 'bufandas','mujer'),
    new cProducto(13, 'Pañuelo con estampado de voluta negro', 'Color: Multicolor, Estilo:	Casual, Composición:	100% Poliéster', '../IMG/bufandas/2.webp', 1350, 'bufandas','mujer'),
    new cProducto(14, 'Bufanda  con fleco de cuadros', 'Color:	Multicolor, Tipo de Estampado:	A cuadros, Composición:	100% Poliéster', '../IMG/bufandas/3.webp', 1500, 'bufandas','unisex'),
    new cProducto(15, 'Bufanda bajo crudo', 'Color:	Burdeos, Tipo de Estampado:	Liso, Composición:	100% Poliéster', '../IMG/bufandas/4.webp', 1470, 'bufandas','unisex'),
    new cProducto(16, 'Pañuelo flor & estampado geométrico', 'Color: Multicolor, Tipo de Estampado:	Floral, A cuadros, Composición:	100% Poliéster', '../IMG/bufandas/5.webp', 1110, 'bufandas','mujer'),
    new cProducto(17, 'Chal con estampado de cadena', 'Color:	Multicolor, Tipo de Estampado:	estampado de cadena, Composición:	100% Poliéster','../IMG/bufandas/6.webp', 1800, 'bufandas','mujer'),
    new cProducto(18, 'Bufanda con estampado de cuadros', 'Color:	Multicolor, Tipo de Estampado:	A cuadros, Composición:	100% Acrílico', '../IMG/bufandas/7.webp', 2000, 'bufandas','unisex'),
    new cProducto(19, 'Pañuelo triangular con estampado de corazón', 'Color: Multicolor, Tipo de Estampado:	Corazón, Composición:	100% Algodón','../IMG/bufandas/8.webp', 2500, 'bufandas','mujer'),
    new cProducto(20, 'Pañuelo con diseño de diamante de imitación', 'Color:	Negro, Tipo de Estampado:	Color combinado, Composición:	100% Poliéster', '../IMG/bufandas/9.webp', 1750, 'bufandas','mujer'),
    new cProducto(21, 'Bufanda con diseño de parche cálido', 'Color:	Beis, Tipo de Estampado:	Liso, Composición:	60% Acrílico, 40% Poliéster', '../IMG/bufandas/10.webp', 2900, 'bufandas','unisex'),
    new cProducto(22, 'Bufanda con diseño de fleco de color combinado', 'Color:	Multicolor, Tipo de Estampado:	Geométrico, Composición:	100% Poliéster', '../IMG/bufandas/11.webp', 2650, 'bufandas','unisex'),
    new cProducto(23, 'Bufanda con fleco', 'Color:	Negro, Tipo de Estampado:	Liso, Composición:	100% Poliéster', '../IMG/bufandas/12.webp', 3000, 'bufandas','unisex')
];

const Faldas = [
    new cProducto(24, 'Wanama Falda Gris Wanama Chanella', 'Color: Multicolor, Estilo:	Casual, Composición:  moda con lycra', '../IMG/faldas/falda1.webp', 3305, 'faldas','mujer'),
    new cProducto(25, 'Baby Rabbit Pollera Verde Baby Rabbit', 'Color: Multicolor, Estilo:	Casual, Composición:	100% Poliéster', '../IMG/faldas/falda2.webp',1.690, 'faldas','mujer'),
    new cProducto(26, 'MAPAMONDO Falda Negra Mapamondo Vernole', 'Color:	Negro, Tipo de Estampado:	A cuadros, Composición:	100% Poliéster', '../IMG/faldas/falda3.webp', 1500, 'faldas','niña'),
    new cProducto(27, 'Ted Bodin Falda Marrón Ted Bodin 7028 ', 'Color:	Marron, Tipo de Estampado:	Liso, Composición:Cuero', '../IMG/faldas/falda4.webp', 4470, 'faldas','mujer'),
    new cProducto(28, 'Ted Bodin Falda Azul Ted Bodin 6877', 'Color: Azul, Tipo de Estampado:	Liso,Cuadrados, Composición:Algodón', '../IMG/faldas/falda5.webp', 2000, 'faldas','mujer'),
    new cProducto(29, 'ETAM Falda Bordó Etam 7035 ', 'Color:Bordo, Tipo de Estampado:cintura gross, Composición:Algodón','../IMG/faldas/falda6.webp', 1800, 'faldas','mujer'),
    new cProducto(30, '  MAPAMONDO Falda Charleen Lunares Mapamondo', 'Color:	Rosa, Tipo de Estampado:	A lunares, Composición:	100% Acrílico', '../IMG/faldas/falda7.webp', 2000, 'faldas','niña'),
    new cProducto(31, 'MAPAMONDO  Falda Natural Mapamondo Kriss ', 'Color: Multicolor, Tipo de Estampado:	Corazón, Composición:	100% Algodón','../IMG/faldas/falda8.webp', 2500, 'faldas','niña'),
    new cProducto(32, 'Sail Falda Roja Sail Elisa', 'Color:	Naranja, Tipo de Estampado:	Flores, Composición:	100% Poliéster', '../IMG/faldas/falda9.webp', 2750, 'faldas','mujer'),
    new cProducto(33, 'ETAM Falda Negra Etam 6750', 'Color:Negro, Tipo de Estampado:	Liso, Composición:	60% Acrílico, 40% Poliéster', '../IMG/faldas/falda10.webp', 1900, 'faldas','mujer'),
    new cProducto(34, 'Florencia Casarsa Falda Rosa Florencia Casarsar', 'Color:Rosa, Tipo de Estampado:	Geométrico, Composición:	100% Poliéster', '../IMG/faldas/falda11.webp', 3650, 'faldas','mujer'),
    new cProducto(35, ' ETAM Falda Bordo Etam 6240', 'Color:Bordo, Tipo de Estampado:	Liso, Composición:	100% Poliéster', '../IMG/faldas/falda12.webp', 3000, 'faldas','mujer')
];

let CarritoCompra = [];
