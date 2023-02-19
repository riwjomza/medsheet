import { stringLength } from "@firebase/util";
import {ChangeEventHandler, FC} from "react"
import {useState} from "react"
import LiveSearch from "../../pages/patient-history/components/LiveSearch"

interface Props {}

const profiles =[
    {id:"1", name: "Antacids and other drugs for dyspepsia Aluminium hydroxide + magnesium hydroxide +simeticone "},
    {id:"2", name: "Compound Cardamom Mixture (Mist Carminative) เฉพาะสูตรที่ไม่ มี sodium bicarbonate    "},
    {id:"3", name: "Simethicone"},
    {id:"4", name: "Domperidone maleate "},
    {id:"5", name: "Hyoscine-n-butylbromide"},
    {id:"6", name: "Metoclopamide"},
    {id:"7", name: "Omeprazole"},
    {id:"8", name: "Ranitidine HCl"},
    {id:"9", name: "Omeprazole"},
    {id:"10", name: "Ranitidine HCl    "},
    {id:"11", name: "Octreotide acetate"},
    {id:"12", name: "Misoprostol"},
    {id:"13", name: "Oral hydrate solution"},
    {id:"14", name: "Loperamide hydrochloride"},
    {id:"15", name: "ฟ้าทะลายโจร ประกอบด้วย ผงฟ้าทะลายโจรแหง้ 500 มิลลิกรัม"},
    {id:"16", name: "Glycerol"},
    {id:"17", name: "Magnesium hydroxide (milk of magnesia)"},
    {id:"18", name: "Senna (extract)(standadised senna equivalent to 7.5 mg total sennosides)"},
    {id:"19", name:"Lactulose"},
    {id:"20", name:"Sodium phosphates (sodium biphosphate 0.9 g)"},
    {id:"21", name:"Sodium phosphates (sodium phosphate 2.4 g)"},
    {id:"22", name:"Liquid paraffin"},
    {id:"23", name:"Sodium chloride enema"},
    {id:"24", name:"Local anesthetic + Corticoteroid + with or without astringent"},
    {id:"25", name:"เพชรสังฆาต"},
    {id:"26", name:"Diosmin + heperidine"},
    {id:"27", name:"igoxin"},
    {id:"28", name:"Furosemide"},
    {id:"29", name:"Hydrochlorothiazide"},
    {id:"30", name:"Mannitol"},
    {id:"31", name:"Spironolactone"},
    {id:"32", name:"Amiloride HCl + hydrochlorothiazide"},
    {id:"33", name:"Adrenosine"},
    {id:"34", name:"Atropine sulfate"},
    {id:"35", name:"Magnesium sulfate"},
    {id:"36", name:"Amiodarone hydrochloride"},
    {id:"37", name:"Atenolol"},
    {id:"38", name:"hydrochloride"},
    {id:"39", name:"Carvedilol"},
    {id:"40", name:"Hydralazine HCl"},
    {id:"41", name:"Methyldopa"},
    {id:"42", name:"Doxazosin mesilate"},
    {id:"43", name:"Enalapril maleate"},
    {id:"44", name:"Captopril"},
    {id:"45", name:"Losartan potassium"},
    {id:"46", name:"Glyceryl trinitrate"},
    {id:"47", name:"Isosorbide dinitrate"},
    {id:"48", name:"Isosorbide mononitrate"},
    {id:"49", name:"Amlodipine besilate"},
    {id:"50", name:"Verapamil hydrochloride"},
    {id:"51", name:"Manidipine hydrochloride"},
    {id:"52", name:"Nicardipine HCl"},
    {id:"53", name:"Nifedipine (sustained release)"},
    {id:"54", name:"Dopamine"},
    {id:"55", name:"Dobutamine HCl"},
    {id:"56", name:"Norepinephrine (Nor- adrenaline)"},
    {id:"57", name:"Ephedrine"},
    {id:"58", name:"Epinephrine (Adrenaline)"},
    {id:"59", name:"Wafarin sodium"},
    {id:"60", name:"Heparin sodium"},
    {id:"61", name:"Enoxaparin sodium"},
    {id:"62", name:"Aspirin (Acetylsalicylic acid)"},
    {id:"63", name:"Clopidogrel bisulfate"},
    {id:"64", name:"Streptokinase"},
    {id:"65", name:"Tranexamic acid"},
    {id:"66", name:"Gemfibrozil"},
    {id:"67", name:"Simvastatin"},
    {id:"68", name:"Fenofibrate"},
// Atorvastatin
// Salbutamol sulfate
// Terbutaline sulfate
// Salbutamol sulfate
// Ipratropium bromide + Fenoterol hydrobromide
// Aminophylline
// Theophylline (sustained release)
// Budesonide
// Fluticasone + salmeterol
// Montelukast sodium
// Chlorpheniramine maleate
// Hydroxyzine
// Cetirizine hydrochloride
// Phospholipids
// Dextromethophan hydrobromide
// Opium and glycerrhiza Mixture compound (M. Tussis; Brown Mixture)
// Ammonium carbonate +glycerrhiza
// Glyceryl guaiacolate
// Bromhexine
// ยาประสะมะแว้ง
// Phenylephrine HCl + Brompheniramine maleate
// Aromatic Ammonia spirit
// ฟ้าทะลายโจร ประกอบด้วย ผงฟ้าทะลายโจรแหง้ 500 มิลลิกรัม
// Chloral hydrate
// Diazepam
// Lorazepam
// Clonazepam
// Dipotassium clorazepate
// Hydroxyzine
// Alprazolam
// Chlorpromazine HCl
// Fluphenazine decanoate
// Haloperidol
// Perphenazine
// Trifluoperazine hydrochloride
// Clozapine
// Flupentixol (as decanoate)
// Risperidone
// Thioridazine
// Amobarbital + chlorpromazine
// Carbamazepine
// Lithium carbonate
// Sodium valproate EC tablet 200 mg
// Sodium valproate Oral solution 200 mg/ml
// Sodium valproate SR tablet 500 mg
// Amitriptyline hydrochloride
// Fluoxetine HCl
// Imipramine
// Nortriptyline HCL
// Sertraline
// Trazodone HCl
// Domperidone maleate
// Metoclopamide
// Ondansetron
// Dimenhydrinate
// Betahistine mesilate (Betahistine mesylate)
// Acetaminophen (paracetamol)
// Aspirin (Acetylsalicylic acid)
// Ibuprofen
// Fentanyl citrate
// Methadone hydrochloride
// Morphine sulfate
// Pethidine hydrochloride
// Tramadol hydrochloride
// Amitriptyline hydrochloride
// Carbamazepine
// Nortriptyline hydrochloride
// Gabapentin
// Acetaminophen (paracetamol)
// Aspirin
// Ibuprofen
// Ergotamine tartrate + caffeine
// Amitriptyline HCl
// Propanolol HCl
// Cyproheptadine HCl
// Sodium valproate
// Carbamazepine
// Magnesium sulfate
// Phenobarbital
// Phenytoin base
// Phenytoin sodium
// Sodium valproate
// Clonazepam
// Sodium valproate
// Diazepam
// Phenobabital sodium
// Phenytoin sodium
// Midazolam Hydrochloride
// Diazepam
// Levodopa + Carbidopa as monohydrate
// Propanolol
// Trihexyphenidyl HCl
// Baclofen
// Clonazepam
// Nortriptyline hydrochloride
// Amoxicillin trihydrate
// Ampicillin sodium
// Cloxacillin sodium
// Dicloxacillin sodium
// Penicillin G sodium (benzylpenicillin)
// Phenoxymethylpenicillin potassium (penicillin V)
// Benzathine benzylpenicillin (Penicillin G benzathine)
// Amoxicillin trihydrate + Clavulanate potassium (Co-amoxiclav)
// Piperacillin sodium+ Tazobactam sodium
// Cefazolin sodium
// Cefotaxim sodium
// Ceftaxidime sodium
// Ceftriaxone sodium
// Cefixime
// Cefoperazone sod. + salbactam sod
// Meropenam
// Doxycycline hyclate (HCl)
// Gentamicin sulfate
// Amikacin sulfate
// Erythromycin estolate
// Roxitromycin
// Azithromycin
// Clarithromycin
// Norfloxacin
// Ciprofloxacin HCl
// Ciprofloxacin
// Metronidazole
// Clindamycin phosphate
// Chloramphenicol sodium succinate
// Colistimethate sodium (sodium colistinmethanesulphonate)
// Vancomycin HCl
// Sulfamethoxazole + trimethoprim (cotrimoxazole)
// Ethambutol HCl
// Isoniazid
// Pyrazinamide
// Rifampicin
// Streptomycin sulfate
// Isoniazid + Rifampicin + Pyrazinamide
// Isoniazid + Rifampicin
// Isoniazid + Rifampicin + Pyrazinamide + Etambutol HCl
// Amikacin sulfate
// Cycloserine
// Para-aminocalicylic acid (PAS)
// Kanamycin sulfate
// Ofloxacin
// Levofloxacin hemihydrate
// Dapsone
// Fluconazole
// Griseofluvin
// Nystatin
// Itraconazole
// Amphotericin B
// Aciclovir (Acyclovir)
// Oseltamivir phosphate
// Acyclovir
// Efavirenz
// Lamivudine (3TC)
// Nevirapine
// Tenofovia disoproxil fumarate
// Tenofovir Disoproxil Fumarate + Emtricitabine
// Tenofovir Disoproxil Fumarate + Emtricitabine+ Efavirenz
// Zidovudine (AZT)
// Zidovudine + Lamivudine
// Zidovudine + Lamivudine + nevirapine
// Lamivudine + stavudine + nevirapine
// Stavudine
// Atazanavir sulfate
// Lopinavir + Ritonavir
// Ritonavir
// Abacavir (ABC)
// Didanosine (ddI)
// Indinavir sulfate
// Lamivudine (3TC)
// Tenofovir disoproxil fumarate
// Chloroquine phosphate
// Primaquine phosphate
// Quinine
// Artesunate
// Mefloquine hydrochloride
// Metronidazole
// Pyrimethamine
// Sulfadiazine
// Albendazole
// Diethylcarbamazine citrate
// Praziquantel
// Chlorhexidine gluconate
// Ethyl alcohol
// Gential violet
// Hydrogen peroxide
// Povidone-iodine
// Chlorhexidine gluconate
// Biphasic isophane insulin
// Isophane insulin (NPH)
// Soluble insulin (Neutral insulin ; insulin injection)
// Insulin glargine
// Glibenclamide
// Glipizide
// Metformin hydrochloride
// Pioglitazone hydrochloride
// Levothyroxine sodium (L- thyroxine sodium)
// Propylthiouracil
// Thiamazole (Methimazole)
// Dexamethasone
// Hydrocortisone
// Prednisolone
// Triamcinolone acetonide
// Norethisterone
// Conjugated estrogen
// Estradiol valerate+Norgestril
// Methylergometrine maleate
// Oxytocin
// Indomethacin sodium
// Sulprostone
// Terbutaline sulfate
// Clotrimazole
// Etonogestrel
// Ethinylestradiol + Levonorgestrel
// Levonorgestrel
// Medroxyprogesterone acetate
// Lynestrenol
// Doxazosin mesilate
// Finasteride
// Oxybutynin hydrochloride
// Methotrexate
// Dexamethasone sodium phosphate
// Prednisolone
// Fresh frozen plasma
// Leukocyte depleted packed red cell
// Packed red cell
// Platelet concentration single donor
// Whole blood
// Folic acid
// Deferoxaminemesilate (Desferrioxaminemesilate)
// Deferiprone
// Epoetin alfa (epoetin alpha)
// Glucose with or with out sodium chloride
// Intermittent peritoneal dialysis
// Sodium bicarbonate
// Potassium chloride
// Sodium lactate intravenous infusion compound
// Water for injection
// Sodium chloride
// Calcium polystyrene sulfonate
// Acetate Ringer solution
// Hydroxyethyl starch
// Folic acid
// Vitamin B1
// Vitamin B6
// Vitamin C
// Vitamin K1 (Phytomenadione
// Multivitamin
// Vitamin E
// Alfacalcido (1-alpha-hydroxyvitamin D3)
// Vitamin B complex
// Vitamin B 1-6-12
// Dextrose solution with minerals and electrolytes
// Fat emulsion
// Calcium carbonate
// Calcium gluconate
// Magnesium sulfate
// Ferrous fumarate
// Ferrous fumarate
// Folic acid
// Ferrous salt + Folic acid + Potassium Iodide
// Aspirin
// Diclofenac sodium
// Ibuprofen
// Naproxen
// Piroxicam
// Mefenamic acid
// Chloroquine phosphate
// Hydroxychloroquine sulfate
// Methotrexate
// Colchicin
// Allopurinol
// Neostigmine methylsulfate
// Diazepam
// Baclofen
// Tolperisone
// Methyl Salicylate cream compound
// Chloramphenicol
// Chlortetracycline HCl
// Dexamethasone sodium phosphate + Neomycin sulfate
// Antazoline HCl + tetrahydrozoline HCl
// Tetracaine HCl
// Hydroxypropyl methylcellulose USP
// Chloramphenicol
// Dexamethasone + Framycetin sulfate + Gramicidin
// Dexamethasone sodium phosphate + Neomycin sulfate
// Gentian violet
// Ofloxacin
// Budesonide
// Sodium chloride
// Oxymetazoline hydrochloride
// Borax (in glycerin)
// Chlorhexidine gluconate
// Triamcinolone scetonide
// Clotrimazole
// Nystatin
// Clove oil
// Chlorhexidine gluconate
// Epinephrine (Adrenaline)
// Zinc oxide + Zinc acetate
// Silver sulfadiazine
// Mupirocin
// Benzoic acid + salicylic acid (Whitefield’s ointment)
// Clotrimazole
// Benzyl benzoate
// Olive oil
// White petrolatum (Vasline)
// Zinc oxide
// Calamide
// Betamethasone valerate
// Triamcinolone acetonide
// Clobetasol propioate
// Coal tar
// Methotrexate
// Podophyllin (Podophyllum resin)
// Silver nitrate
// Anti-D immunoglobulin
// BCG vaccine
// Diphtheria – tetanus vaccine
// Diphtheria – tetanus – pertussis vaccine
// Diphtheria – tetanus – pertussis-Hepatitis B vaccine (DTP-HB)
// Hepatitis B vaccine
// Influenza vaccine (trivalent)
// Influenza vaccine  (pandemic influenza)
// Japanese encephalitis vaccine, inactivated (inactivated JE vaccine)
// Measle – Mump – Rebella vaccine (MMR)
// Poliomyelitis vaccine live
// attenuated (bivalent,trivalent)
// Rabies immunoglobulin, horse Inj (ERIG)
// Rabies vaccines
// Tetanus toxoid (Tetanus Inj vaccine)
// Tetanus antitoxin, human (Anti-tetanus immunoglobulin, human)
// Hepatitis B immunoglobulin, human (HBIG)
// Inactivated polio vaccine (IPV)
// Propofol
// Thaiopental sodium (Thaiopentone sodium)
// Ketamine HCl
// Sevoflurane
// Desflurane
// Cisatracurium bromide
// Pancuronium bromide
// Diazepam
// Fentanyl citrate
// Morphine sulfate
// Pethidine hydrochloride
// Midazolam Hydrochloride
// Atropine sulfate
// Neostigmine methylsulfate
// Lidocaine HCI
// Mepivacaine HCl
// Bupivacine HCI
// Lidocaine HCl + Epinephrine
// Acetylcysteine (N-acetylcysteine)
// Antivenom sera
// Polyvalent antivenom for hematotoxin
// Polyvalent antivenom for neurotoxin
// Atropine sulfate
// Calcium gluconate
// Charcoal, activated
// Naloxone HCl
// Sodium bicarbonate
// Vitamin K1 (Phytomenadion)
// Deferoxaminemesilate (Desferrioxamine mesilate)
// Sodium nitrite
// Sodium thiosulfate
// Calcium folinate
// Methylene blue (Methylthioninium chloride)
// Norepinephrine (Noradrenaline)
// Phenobarbital sodium (Phenobarbitone sodium)
// Iopamidol


];

// const drugName: FC<Props> = (props): JSX.Element => {
//     const [results, setResults] = useState<{ id: string; name: string }[]>();
//   const [selectedProfile, setSelectedProfile] = useState<{
//     id: string;
//     name: string;
//   }>();

//   type changeHandler = React.ChangeEventHandler<HTMLInputElement>;
//   const handleChange: changeHandler = (e) => {
//     const { target } = e;
//     if (!target.value.trim()) return setResults([]);

//     const filteredValue = profiles.filter((profile) =>
//       profile.name.toLowerCase().startsWith(target.value)
//     );
//     setResults(filteredValue);
//   };
//     return <LiveSearch 
//     results={results}      
//     value={selectedProfile?.name}
//     renderItem={(item)=> <p>{item.name}</ p>}
//     onChange={handleChange}
//     onSelect={(item) => setSelectedProfile(item)}
//     />;  
// };

export default profiles;