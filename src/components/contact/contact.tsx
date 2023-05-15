import React, { FC } from 'react';
import { ContactWrapper } from './contact.styled';

interface ContactProps {}

const Contact: FC<ContactProps> = () => (
 <ContactWrapper data-testid="Contact">
    Contact Component
 </ContactWrapper>
);

export default Contact;
