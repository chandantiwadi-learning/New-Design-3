import React from 'react';
import { Link } from 'react-router-dom';

const FactoryTour = () => {
  return (
    <div className="factory-tour-page-legacy select-none">
      <section className="main secondary_page" data-animate-up="header-static" data-animate-down="header-small">
        
        {/* Start title container */}
        <div className="title_container type_3 t_align_center">
          <div className="container">
            <ul className="path_list clearfix">
              <li><Link to="/">Home</Link></li>
              <li><i></i>Factory Tour</li>
            </ul>
            <h1 style={{ color: '#fff', fontSize: '3em' }}>Factory Tour</h1>
          </div>
        </div>

        <section className="py-12 bg-gray-50 text-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 uppercase" style={{ color: '#0d8bc5' }}>Our Manufacturing Parameters:</h2>
              
              <div className="flex flex-col md:flex-row gap-12 items-start">
                {/* Table Column */}
                <div className="w-full md:w-1/2 overflow-x-auto pb-4 scrollbar-thin">
                  <table className="w-full min-w-[600px] text-sm text-left">
                    <tbody>
                      <tr className="flex flex-col sm:table-row gap-4 sm:gap-0">
                        <td className="align-top py-2 pr-4 space-y-2 whitespace-nowrap">
                          <p><strong>CNC turning</strong></p>
                          <p><strong>CNC long turning</strong></p>
                          <p><strong>Standard turning</strong></p>
                          <p><strong>Burnishing/roller compression</strong></p>
                          <p><strong>CNC milling</strong></p>
                          <p><strong>Centre grinding</strong></p>
                          <p><strong>CNC alignment</strong></p>
                          <p><strong>Standard alignment</strong></p>
                          <p><strong>Thread rolling</strong></p>
                          <p><strong>Hot forming</strong></p>
                          <p><strong>Heat treatment</strong></p>
                          <p><strong>Gearing/serration</strong></p>
                          <p><strong>Deep-hole drilling</strong></p>
                          <p><strong>Surface finishing</strong></p>
                        </td>
                        <td className="align-top py-2 px-4 space-y-2 text-gray-600">
                          <p>up to Ø400mm</p>
                          <p>up to Ø36,3mm</p>
                          <p>up to Ø400mm</p>
                          <p>up to Ø400mm</p>
                          <p>x= 600mm</p>
                          <p>up to Ø260mm</p>
                          <p>up to Ø60mm</p>
                          <p>up to Ø90mm</p>
                          <p>M6 up to M210</p>
                          <p>up to Ø60mm</p>
                          <p>up to Ø300mm</p>
                          <p>miscellaneous</p>
                          <p>Ø 4 up to Ø 60mm</p>
                          <p>wear protection</p>
                          <p>corrosion protection</p>
                        </td>
                        <td width="90" className="hidden sm:table-cell align-top py-2 px-4 space-y-2">
                          <p>&nbsp;</p>
                          <p>&nbsp;</p>
                          <p>&nbsp;</p>
                          <p>&nbsp;</p>
                          <p>y= 2000mm</p>
                        </td>
                        <td className="align-top py-2 px-4 space-y-2 text-gray-600">
                          <p>length up to 3000mm</p>
                          <p>length up to 800mm</p>
                          <p>length up to 6000mm</p>
                          <p>length up to 6000mm</p>
                          <p>z= 600mm</p>
                          <p>length up to 1500mm</p>
                          <p>length up to 1500mm</p>
                          <p>length up to 2500mm</p>
                          <p>length up to 6000mm</p>
                          <p>length up to 2000mm</p>
                          <p>length up to 900mm</p>
                          <p>&nbsp;</p>
                          <p>length up to 2000mm</p>
                          <p>nitration, induction hardening, etc.<br />galvanic and chemical coatings</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Image Column */}
                <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg border border-gray-100">
                  <img 
                    src="/images/factory-tour.jpg" 
                    alt="factory tour" 
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

      </section>
    </div>
  );
};

export default FactoryTour;
